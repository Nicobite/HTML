/* #DEFINES :'( */

var FACTOR = 0.7;


/* GLOBAL VARIABLES */

var scene, camera, renderer;
var geometry, material, mesh;
var initX, initY;
var diffX, diffY;
var controls;


/* USEFUL FUNCTIONS */

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

/**
	Renders the scene from the PoV of the camera
*/
function animate() {
	// note: three.js includes requestAnimationFrame shim
	requestAnimationFrame( animate );
	//*
	if (!controls) {
		alert('no controls found');
	}
	else {
		controls.update();
	}//*/
	//mesh.rotation.x += 0.01;
	//mesh.rotation.y += 0.02;
	renderer.render( scene, camera );
}

/**
	Uses the TrackballControls JS script in order to move the camera around
		LMB: Rotate around the centre of scene
		RMB: Pan around the plane containing the camera
		MMB: Zoom
	However, FOV effects after Pan are complete trash.
*/
function trackball(){
	/*Creating trackball type mouse control variable*/
	controls = new THREE.TrackballControls( camera );
	
	/*Tweaking action speeds*/
	controls.rotateSpeed = 4.0;
	controls.zoomSpeed = 4.0;
	controls.panSpeed = 3.0;
	
	/*Tweaking authorized actions*/
	controls.noZoom = false;
	controls.noPan = false;
	
	/*staticMoving at false makes moving the scene A PAIN*/
	controls.staticMoving = true;
	
	/*Unknown, found on website*/
	//controls.dynamicDampingFactor = 28;
	//controls.keys = [ 65, 83, 68 ];
	//controls.addEventListener( 'change', render );
}


/* USEFUL FUNCTIONS/others */

function onMouseClick(event){
}

function onMouseDown(event){
}

function onMouseUp(event){
}

/* Not by me but quite a good idea (Trackball is better) */	
function onDocumentMouseMove( event ) {
	alert('Mouse move detected');
	event.preventDefault();
	//alert('Mouse move detected')
	if ( isMouseDown ) {
		alert('You have clicked');
		theta = - ( ( event.clientX - onMouseDownPosition.x ) * 0.5 )
				+ onMouseDownTheta;
		phi = ( ( event.clientY - onMouseDownPosition.y ) * 0.5 )
				+ onMouseDownPhi;

		phi = Math.min( 180, Math.max( 0, phi ) );

		camera.position.x = radious * Math.sin( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
		camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
		camera.position.z = radious * Math.cos( theta * Math.PI / 360 )
                           * Math.cos( phi * Math.PI / 360 );
		camera.updateMatrix();
	}
	mouse3D = projector.unprojectVector(
		new THREE.Vector3(
			( event.clientX / renderer.domElement.width ) * 2 - 1,
			- ( event.clientY / renderer.domElement.height ) * 2 + 1,
			0.5
		),
		camera
	);
	ray.direction = mouse3D.subSelf( camera.position ).normalize();
	interact();
	render();
}