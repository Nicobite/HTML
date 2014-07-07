/**
	Creates a scene, a camera, draws a mesh
*/
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 750;
	geometry = new THREE.BoxGeometry( 200, 200, 200 );
	material = new THREE.MeshBasicMaterial( { color: 0xf55000, wireframe: false } );
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth * FACTOR, window.innerHeight * FACTOR );
	document.body.appendChild( renderer.domElement );
}