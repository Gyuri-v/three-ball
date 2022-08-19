import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dat from 'dat.gui';

const canvas = document.querySelector('.canvas');

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.shadowMap.enable = true;
renderer.setSize(window.innerWidth, window.innerHeight);

// scene
const scene = new THREE.Scene;
scene.background = new THREE.Color('#f2f2f2');

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

// light
const ambientLight = new THREE.AmbientLight('#fff', 0.5);
const spotLight = new THREE.SpotLight('#fff');
spotLight.angle = 0.5;
spotLight.position.set(0, 5, 50);
// ambientLiglightht.receiveShadow = true;
// ambientLight.castShadow = true;
scene.add(ambientLight, spotLight);

gui.add(spotLight, 'angle', 0, Math.PI, '0.1').name('spotLight angle');
gui.add(spotLight.position, 'x', 0, 100, '0.1').name('spotLight x');
gui.add(spotLight.position, 'y', 0, 100, '0.1').name('spotLight y');
gui.add(spotLight.position, 'z', 0, 100, '0.1').name('spotLight z');

// cannon
const cannonWorld = new CANNON.World();
cannonWorld.gravity.set(0, -40, 0);
cannonWorld.broadphase = new CANNON.SAPBroadphase(cannonWorld);

const defaultMaterial = new CANNON.Material('default');
const ballMaterial = new CANNON.Material('ball');
const defaultContactMaterial = new CANNON.ContactMaterial(
  defaultMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.3,
  }
)
const ballDefaultContactMaterial = new CANNON.ContactMaterial(
  ballMaterial,
  defaultMaterial,
  {
    friction: 0.5,
    restitution: 0.7,
  }
);
cannonWorld.defaultContactMaterial = defaultContactMaterial;
cannonWorld.addContactMaterial(ballDefaultContactMaterial);

// mesh - floor & wall
const planeGeometry = new THREE.BoxGeometry(50, 0.2, 50);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: '#666',
})
const floorMesh = new THREE.Mesh(planeGeometry, planeMaterial);
const wallMesh = new THREE.Mesh(planeGeometry, planeMaterial);
wallMesh.position.y = 25;
wallMesh.position.z = -25;
wallMesh.rotation.x = Math.PI / 2;
scene.add(floorMesh, wallMesh);

const planeShape = new CANNON.Plane();
const floorBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 0.6, 0),
  shape: planeShape,
  material: defaultMaterial,
});
floorBody.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1, 0, 0),
  Math.PI / 2,
);
cannonWorld.addBody(floorBody);

// mesh - goal
const goalGeometry = new THREE.CircleGeometry(5, 32);
const goalMaterial = new THREE.MeshStandardMaterial({
  color: 'blue',
});
const goalMesh = new THREE.Mesh(goalGeometry, goalMaterial);
goalMesh.position.set(0, 15, -24.8)
scene.add(goalMesh);

// mesh - sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 'green',
})
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.name = "공";
sphereMesh.position.set(0, 1.1, 20);
scene.add(sphereMesh);

const sphereShape = new CANNON.Sphere(0.5);
const sphereBody = new CANNON.Body({
  mass: 1,
  position: new CANNON.Vec3(0, 5.1, 20),
  shape: sphereShape,
  material: ballMaterial,
});
sphereMesh.cannonBody = sphereBody;
cannonWorld.addBody(sphereBody);

// gltf
// const gltfLoader = new GLTFLoader();

// let ballMesh;
// let ballBody;
// gltfLoader.load(
//   './model/ball.glb',
//   gltf => {
//     ballMesh = gltf.scene.children[0];
//     ballMesh.position.set(0, 1.1, 20);
//     scene.add(ballMesh);
    
//     gui.add(ballMesh.position, 'x', 0, 100, 0.01).name('공 x');
//     gui.add(ballMesh.position, 'y', 0, 100, 0.01).name('공 y');
//     gui.add(ballMesh.position, 'z', 0, 100, 0.01).name('공 z');

//     const ballShape = new CANNON.Sphere(0.5);
//     ballBody = new CANNON.Body({
//       mass: 1,
//       position: new CANNON.Vec3(0, 5.1, 20),
//       shape: ballShape,
//       material: ballMaterial,
//     });
    
//     cannonWorld.addBody(ballBody);
//   }
// );


// draw
const clock = new THREE.Clock();
const draw = function () {
  const delta = clock.getDelta();

  let cannonStepTime = 1 / 60;
  if ( delta < 0.01 ) cannonStepTime = 1 / 120;

  cannonWorld.step(cannonStepTime, delta, 3);

  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);

  // if ( ballMesh ) {
  //   ballMesh.position.copy(ballBody.position);
  //   ballMesh.quaternion.copy(ballBody.quaternion);
  // }

  controls.update();

  renderer.render(scene, camera);
  renderer.setAnimationLoop(draw);
}
draw();


// raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const checkIntersects = function (){
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(scene.children);

  for (const item of intersects) {
    console.log(intersects[0].object);
    if ( intersects[0].object.cannonBody ){
      console.log('ddd');
    }
  }
}



// event
canvas.addEventListener('click', function(e) {
  mouse.x = e.clientX / canvas.width * 2 - 1;
  mouse.y = -(e.clientY / canvas.height * 2 - 1);

  // console.log(camera.position);
  checkIntersects();
});