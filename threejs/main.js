function createRenderer() {
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor('#31a931');

    renderer.shadowMap.enabled = true;

    const output = document.querySelector('#output');
    output.appendChild(renderer.domElement);
    return renderer;
}

function createScene() {
    const scene = new THREE.Scene();
    return scene;
}

function createVector(x=0, y=0, z=0) {
    const vector = new THREE.Vector3(x, y, z);
    return vector;
}

function createCamera() {
    const camera = new THREE.PerspectiveCamera(
       45,
       window.innerWidth / window.innerHeight,
       0.1,
       1000
    );

    camera.position.x = -30;
    camera.position.y = 50;
    camera.position.z = 30;
    camera.lookAt(offset);
    return camera;
}

function raycaster() {
    const raycaster = new THREE.Raycaster();
    return raycaster;
}

function createAxesHelper() {
    const axesHelper = new THREE.AxesHelper(100);
    return axesHelper;
}

function createFloor() {
    // What do you want the floor to be made of.
    const floorMaterial = new THREE.MeshLambertMaterial({
        color: "#0000ff"
    });

    // The floor shape.
    const floorGeometry = new THREE.BoxGeometry(60, 0.1, 20); // WIDTH, HEIGHT, DEPTH

    // To create the mesh, you need to combine the floor's [shape] geometry with the material material with which it is made.
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    
    // Now the floor's position in the scene relative to the axes
    floor.position.x = 20;
    floor.recieveShadow = true;
    return floor;
}

function createRectangle({ width, height, depth, x, y, z }) {
    console.log(width, height);

    // again, shape and material
    const geo = new THREE.BoxGeometry(width, height, depth);
    const mat = new THREE.MeshLambertMaterial({
        color: "#d40000"
    });

    // and wrap the mesh
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.recieveShadow = true;
    return mesh;
}

function createLight() {
    const pointLight = new THREE.PointLight('#FFFFFF', 1.2);
    pointLight.position.x = 4;
    pointLight.position.y = 30;
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;
    return pointLight;
}

function createLightHelper(light) {
    const helper = new THREE.PointLightHelper(light);
    return helper;
}

function addOrbitControls(camera, renderer) {
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = createVector();
    return controls;
}

// this.plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500, 8, 8), new THREE.MeshBasicMaterial({color: 0xffffff}));

function createPlane() {
    const plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(500, 500, 8, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    )
    plane.visible = false;

    return plane;
}

const renderer = createRenderer();
const scene = createScene();
const offset = createVector();
const camera = createCamera(scene);
const plane = createPlane();
const axes = createAxesHelper();
const floor = createFloor();
const rectangle = createRectangle({
    width: 10,
    height: 4,
    depth: 4,
    x: 10,
    y: 4,
    z: 4
});

const light = createLight();
const lightHelper = createLightHelper(light);

// Add axes to the scene, so renderer can render it within the scene.
scene.add(axes, floor, rectangle, light, lightHelper, plane);

addOrbitControls(camera, renderer);

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// renderer.render(scene, camera);
animate();

document.addEventListener('mousedown', this.onDocumentMouseDown, false);
document.addEventListener('mousemove', this.onDocumentMouseMove, false);
document.addEventListener('mouseup', this.onDocumentMouseUp, false);

document.addEventListener('mousemove', event => console.log(event));
