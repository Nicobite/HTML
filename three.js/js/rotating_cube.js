			var scene, camera, renderer;
		    var geometry, material, mesh;
		
		    init();
		    animate();
		
		    function init() {
		
		        scene = new THREE.Scene();
		
		        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		        camera.position.z = 750;
		
		        geometry = new THREE.BoxGeometry( 200, 200, 200 );
		        material = new THREE.MeshBasicMaterial( { color: 0x333333, wireframe: false } );
		        mesh = new THREE.Mesh( geometry, material );
		
		        scene.add( mesh );
		
		        renderer = new THREE.CanvasRenderer();
		        renderer.setSize( window.innerWidth, window.innerHeight );
		
		        document.body.appendChild( renderer.domElement );
		
		    }
		
		    function animate() {
		
		        // note: three.js includes requestAnimationFrame shim
		        requestAnimationFrame( animate );
		
		        mesh.rotation.x += 0.01;
		        mesh.rotation.y += 0.05;
		
		        renderer.render( scene, camera );
		
		    }
		
