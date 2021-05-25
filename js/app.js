//Load 3D scene 
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x2c3e50 );
renderer.setPixelRatio( window.devicePixelRatio );

// Get a reference to the container div
container = document.getElementById( '2' );
let dim = container.getBoundingClientRect();
renderer.setSize(dim.width, dim.height);
console.log(dim)
// Add the renderer.domElement, which is a canvas, to the container div.
container.appendChild( renderer.domElement );

// Load Camera Perspektive
var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 
    1, 10000 );

// Load the Orbitcontroller
//var controls = new THREE.OrbitControls( camera, renderer.domElement );

camera.position.set( -1,0,30);

// // // Load Light
// var ambientLight = new THREE.AmbientLight( 0xCCCCCC);
// scene.add( ambientLight );

var pointLight = new THREE.PointLight(0xcccccc,2);
pointLight.position.set( 0, 2, 0 );

// scene.add( camera );
scene.add( pointLight );

// const directionalLight = new THREE.DirectionalLight(0x00000);
// scene.add( directionalLight );

// scene.add( camera );
//  camera.add( directionalLight );

// material = new THREE.MeshStandardMaterial( {

//     color: 0x00000,

//     roughness: 0.5,
//     metalness: 1,

//     roughnessMap: 1,
//     metalnessMap:0.2,

//     envMap: 1, // important -- especially for metals!
//     envMapIntensity: 2.4

// } );

var loader = new THREE.GLTFLoader();

loader.load( 'scissors.glb', function ( gltf ) {
   
    obj = gltf.scene;
   
    
    // obj.traverse(function (child) {
    //     if (child.isMesh) {
    //         child.material =material
    //     }
    // })

    scene.add( gltf.scene );
    
    console.log(gltf.scene)
    animate()

}, undefined, function ( error ) {
    console.error( error );
} );

function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.01;
    
    renderer.render( scene, camera );
}

