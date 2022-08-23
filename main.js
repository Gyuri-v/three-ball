import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dat from 'dat.gui';
import Stats from 'three/examples/jsm/libs/stats.module'
import CannonUtils from './utils/cannonUtils.js'
import CannonDebugRenderer from './utils/CannonDebugRenderer.js'
import { Vector3 } from 'three';

const canvas = document.querySelector('.canvas');
const progress = document.querySelector('.cursor-progress');
const progressBar = progress.querySelector('.bar');

let startTime = 0;
let endTime = 0;
let progressChk = false;
let progressGage = 0;

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// scene
const scene = new THREE.Scene;
scene.background = new THREE.Color('#111');

// camera 
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 12, 32);
camera.lookAt(0, 0, 0);
scene.add(camera);

// controls
const controls = new OrbitControls( camera, renderer.domElement );

// gui
const gui = new dat.GUI();

// status
const stats = Stats()
document.body.appendChild(stats.dom)

// light
const ambientLight = new THREE.AmbientLight('#fff', 0.1);
const spotLight = new THREE.SpotLight('#fff', 1);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
spotLight.position.set(0, 10, 50);
scene.add(ambientLight, spotLight);

// cannon
const cannonWorld = new CANNON.World();
cannonWorld.gravity.set(0, -40, 0);
cannonWorld.broadphase = new CANNON.SAPBroadphase(cannonWorld);

const defaultMaterial = new CANNON.Material('default');
const ballsMaterial = new CANNON.Material('ball');
const goalsMaterial = new CANNON.Material('goal');
const defaultContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.3,
  }
)
const ballsDefaultContactMaterial = new CANNON.ContactMaterial(
  ballsMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.7,
  }
);
const ballsGoalContactMaterial = new CANNON.ContactMaterial(
  ballsMaterial,
  goalsMaterial,
  {
    friction: 0.5,
    restitution: 0.7,
  }
);
cannonWorld.defaultContactMaterial = defaultContactMaterial;
cannonWorld.addContactMaterial(ballsDefaultContactMaterial);
cannonWorld.addContactMaterial(ballsGoalContactMaterial);

// mesh

// mesh - floor
const planeGeometry = new THREE.BoxGeometry(50, 0.2, 50);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: '#666',
})
const planeShape = new CANNON.Box( new CANNON.Vec3(25, 0.1, 25) );

const floorMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const floorBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 0, 0),
  shape: planeShape,
  material: defaultMaterial,
});
floorMesh.receiveShadow = true;
scene.add(floorMesh);
cannonWorld.addBody(floorBody);

// mesh - wall
// const wallMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// wallMesh.position.set(0, 25, -25)
// wallMesh.rotation.x = Math.PI / 2;
// wallMesh.castShadow = true;
// wallMesh.receiveShadow = true;
// const wallBody = new CANNON.Body({
//   mass: 0,
//   position: new CANNON.Vec3(0, 25, -25),
//   shape: planeShape,
//   material: defaultMaterial,
// });
// wallBody.quaternion.setFromAxisAngle(
//   new CANNON.Vec3(1, 0, 0),
//   Math.PI / 2,
// );
// scene.add(wallMesh);
// cannonWorld.addBody(wallBody);

// mesh - goal

let targetGltf;
let targetMesh;
let targetBody;
let targetLoaded = false;
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  '/model/target.glb',
  (gltf) => {
    targetMesh = gltf.scene.children[0];
    targetMesh.material = new THREE.Geometry().fromBufferGeometry(targetMesh.geometry);
    targetMesh.scale.set(3, 3, 3);
    targetMesh.rotation.z = Math.PI / 2;
    targetMesh.position.set(0, 10, 0);
    scene.add(targetMesh);

    console.log(gltf);
  
    // const targetShape = CannonUtils.CreateTrimesh(targetMesh.geometry);
    // targetBody = new CANNON.Body({
    //   mass: 0,
    //   position: new CANNON.Vec3(0, 10, 0),
    //   shape: targetShape,
    //   material: defaultMaterial,
    // });
    // cannonWorld.addBody(targetBody);

    // targetLoaded = true;
  }
);





// const goalGeometry = new THREE.TorusGeometry(5, 1, 10, 30);
// const goalMaterial = new THREE.MeshStandardMaterial({
//   color: 'blue',
// });
// const goalMesh = new THREE.Mesh(goalGeometry, goalMaterial);
// goalMesh.position.set(0, 15, -20)
// goalMesh.castShadow = true;
// scene.add(goalMesh);

// const goalShape = CannonUtils.CreateTrimesh(goalMesh.geometry);
// const goalBody = new CANNON.Body({
//   mass: 0,
//   position: new CANNON.Vec3(0, 15, -10),
//   shape: goalShape,
//   material: defaultMaterial,
// });
// cannonWorld.addBody(goalBody);

// mesh - ball
const balls = [];

function Ball() {
  this.geometry = new THREE.SphereGeometry();
  this.material = new THREE.MeshStandardMaterial({
    color: 'white',
  })
  this.mesh = new THREE.Mesh(this.geometry, this.material);
  this.mesh.name = "공";
  this.mesh.position.set(0, 1, 20);
  this.mesh.castShadow = true;
  scene.add(this.mesh);
  
  this.shape = new CANNON.Sphere(1);
  this.cannonBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 1, 20),
    shape: this.shape,
    material: ballsMaterial,
  });
  this.mesh.cannonBody = this.cannonBody;
  cannonWorld.addBody(this.cannonBody);
}

let firstBall = new Ball();
balls.push(firstBall);


// draw
const cannonDebugRenderer = new CannonDebugRenderer(scene, cannonWorld);
const clock = new THREE.Clock();

const draw = function () {
  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  let cannonStepTime = 1 / 60;
  if ( delta < 0.01 ) cannonStepTime = 1 / 120;

  controls.update();
  stats.update();

  cannonWorld.step(cannonStepTime, delta, 3);
  cannonDebugRenderer.update();

  balls.forEach((item) => {
    if ( item.cannonBody ) {
      item.mesh.position.copy(item.cannonBody.position);
      item.mesh.quaternion.copy(item.cannonBody.quaternion);
    }
  })

  // goalMesh.position.copy(goalBody.position);
  // goalMesh.quaternion.copy(goalBody.quaternion);
  // goalBody.position.y = 15 + Math.sin(elapsed  * 2) * 5;
  // goalBody.position.x = Math.cos(elapsed  * 2) * 5;
  
  // wallMesh.position.copy(wallBody.position);
  // wallMesh.quaternion.copy(wallBody.quaternion);


  renderer.render(scene, camera);
  renderer.setAnimationLoop(draw);

  if ( progressChk ){
    force = Math.min(2800, (Date.now() - startTime) * 3);
    progressGage = force / 2800 * 100;
    progressBar.style.width = progressGage + '%';
  }
}
draw();


// raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let force = 1000;

const checkIntersects = function (){
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(scene.children);

  for (const item of intersects) {
    if ( intersects[0].object.cannonBody ){

      const forceX = -camera.position.x * 50;
      const forceY = force;
      const forceZ = -force;

      item.object.cannonBody.applyForce(
        new CANNON.Vec3(forceX, forceY, forceZ)
      );

      setTimeout(function () {
        balls.push( new Ball() );
      }, 500)

      break;
    }
  }
}

const checkIntersectsMousedown = function (){
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(scene.children);

  for (const item of intersects) {
    if ( intersects[0].object.cannonBody ){
      progressChk = true;
      progress.style.opacity = '1';
    }
  }
}

const setSize = function () {
  camera.aspect = window.innerWidth / document.documentElement.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, document.documentElement.clientHeight)
  renderer.render(scene, camera);
}


// event
window.addEventListener('load', setSize);
window.addEventListener('resize', setSize);

canvas.addEventListener('mousedown', function(e) {
  mouse.x = e.clientX / canvas.width * 2 - 1;
  mouse.y = -(e.clientY / canvas.height * 2 - 1);

  startTime = Date.now();

  checkIntersectsMousedown();

  if ( progressChk ){
    progress.style.top = `${e.clientY - 20}px`;
    progress.style.left = `${e.clientX}px`;
  }
});

canvas.addEventListener('mouseup', function(e) {
  endTime = Date.now();

  force = Math.min(2800, (endTime - startTime) * 3);
  progressChk = false;
  progressGage = 0;
  progress.style.opacity = '0';
});

canvas.addEventListener('click', function(e) {
  mouse.x = e.clientX / canvas.width * 2 - 1;
  mouse.y = -(e.clientY / canvas.height * 2 - 1);
  
  checkIntersects();

  // goalBody.addEventListener('collide', function () {
  //   console.log('충돌');
  // })
});