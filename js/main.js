import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dat from 'dat.gui';
import Stats from 'three/examples/jsm/libs/stats.module'
import CannonDebugRenderer from '/utils/CannonDebugRenderer.js'
import CreateTarget from './CreateTarget.js';
import CreateBall from './CreateBall.js';

const canvas = document.querySelector('.canvas');
const progress = document.querySelector('.progress');
const progressBar = progress.querySelector('.bar');
const score = document.querySelector('.status_score span');
const lives = document.querySelector('.status_lives span');

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

// loader
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log('로드 시작');
}
// 이미지 하나하나 로드될때마다
loadingManager.onProgress = img => { 
  console.log(img + '로드');
}
// 모든 이미지 로드 완료
loadingManager.onLoad = () => { 
  console.log('로드 완료');
}
// 로드 에러
loadingManager.onError = () => { 
  console.log('로드 에러');
}
const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader(loadingManager);
const cubeTextureLoader = new THREE.CubeTextureLoader();

// controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 30;
controls.maxDistance = 50;
controls.maxPolarAngle = THREE.MathUtils.degToRad(70);
controls.minPolarAngle = THREE.MathUtils.degToRad(20);

// gui
// const gui = new dat.GUI();

// status
// const stats = Stats()
// document.body.appendChild(stats.dom)

// light
const ambientLight = new THREE.AmbientLight('#fff', 0.1);
const spotLight = new THREE.SpotLight('#fff', 1);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
spotLight.position.set(0, 10, 50);
scene.add(ambientLight, spotLight);

// background
const backgroundTexture = cubeTextureLoader
  .setPath('/textures/background2/')
  .load([
    'px.png', 'nx.png',
    'py.png', 'ny.png',
    'pz.png', 'nz.png',
  ]);
scene.background = backgroundTexture;
// scene.background = new THREE.Color('#7faabb');

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
// const planeGeometry = new THREE.BoxGeometry(50, 0.2, 50);
// const planeMaterial = new THREE.MeshStandardMaterial({
//   color: '#666',
// })

const floorTexture = textureLoader.load('/textures/floor.jpg');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.x = 10;
floorTexture.repeat.y = 10;
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
const floorGeometry = new THREE.BoxGeometry(500, 0.2, 500);
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
const floorShape = new CANNON.Box( new CANNON.Vec3(25, 0.1, 25) );
const floorBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 0, 0),
  shape: floorShape,
  material: defaultMaterial,
});
floorMesh.receiveShadow = true;
scene.add(floorMesh);
cannonWorld.addBody(floorBody);

// mesh - target
const targets = [];
let targetCount = 1;
let firstTarget = new CreateTarget({
  scene, 
  cannonWorld, 
  gltfLoader,
  goalsMaterial,
  name : `과녁${targetCount}`,
});
targets.push(firstTarget);
targetCount++


// mesh - ball
const balls = [];
let ballCount = 1;
let firstBall = new CreateBall({ 
  scene, 
  cannonWorld, 
  ballsMaterial,
  name : `공${ballCount}`,
});
balls.push(firstBall);
ballCount++;


// draw
// const cannonDebugRenderer = new CannonDebugRenderer(scene, cannonWorld);
const clock = new THREE.Clock();

const draw = function () {
  const delta = clock.getDelta();

  let cannonStepTime = 1 / 60;
  if ( delta < 0.01 ) cannonStepTime = 1 / 120;

  controls.update();
  // stats.update();

  cannonWorld.step(cannonStepTime, delta, 3);
  // cannonDebugRenderer.update();

  balls.forEach((item) => {
    if ( item.mesh.cannonBody ) {
      item.mesh.position.copy(item.mesh.cannonBody.position);
      item.mesh.quaternion.copy(item.mesh.cannonBody.quaternion);
    }
  });

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
    if ( item.object.name == `공${ballCount - 1}` ){
      const forceX = -camera.position.x * 50;
      const forceY = force;
      const forceZ = -force;
  
      item.object.cannonBody.applyForce(
        new CANNON.Vec3(forceX, forceY, forceZ)
      );

      setTimeout( function () {
        lives.innerText = Math.max(0, 10 - ballCount);
        
        if ( ballCount < 11 ) {
          let newBall = new CreateBall({ 
            scene, 
            cannonWorld, 
            ballsMaterial,
            name : `공${ballCount}`,
          });
          balls.push(newBall);
          ballCount++;
        }
      }, 1000)
    }
  }
}

const checkIntersectsMousedown = function (){
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  for (const item of intersects) {
    if ( item.object.cannonBody ){
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


let chkCollide = false;
canvas.addEventListener('click', function(e) {
  mouse.x = e.clientX / canvas.width * 2 - 1;
  mouse.y = -(e.clientY / canvas.height * 2 - 1);
  
  checkIntersects();
  collideTargetBall();
});

const collideTargetBall = function () {
  if ( ballCount === 10 ) return;

  targets.forEach((item) => {
    if ( item.mesh.cannonBody ){
      item.mesh.cannonBody.addEventListener('collide', function (e) {
        if ( chkCollide ) return;
        chkCollide = true;

        setTimeout(function () {
          cannonWorld.removeBody(item.body);
          scene.remove(item.mesh);

          score.innerText = targetCount - 1;

          const newTarget = new CreateTarget({ 
            scene,
            cannonWorld,
            gltfLoader,
            goalsMaterial,
            name : `과녁${targetCount}`,
            x: Math.random() * 20 - 10,
            y: 5 + Math.random() * 10,
            z: Math.random() * -20,
          });
          targets.push(newTarget);
          targetCount++;

          chkCollide = false;
        }, 0);
      });
    }
  });
}