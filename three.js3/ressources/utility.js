/* http://stackoverflow.com/questions/10806529/threejs-webgl-most-performant-way-for-just-cubes
		^ nécessaire pour la suite par souci de performance */

		
	//TODO Si les linewidth pouvaient scale avec le zoom, la vie serait plus belle.		
		

/**
	Returns a line in the shape of a circle
*/
function draw_circle(radius,resolution,x,y,z){
	/* Creating vertices */
	var geometry = new THREE.CircleGeometry( radius, resolution );
	/* Removing central vertice */
	geometry.vertices.shift();
	/* Creating standard material for a place */
	//TODO: Make linewidth scale with zoom
	var material = new THREE.LineBasicMaterial({
        color: 0x000000,
		linewidth: 3
    });
	var line = new THREE.Line(geometry, material);
	line.position.x = x;
	line.position.y = y;
	line.position.z = z;
	return line;
}

/**
	Returns a line in the shape of a transition
*/
function draw_transition(x,y,z,direction){
	/* Creating vertices */
	var geometry = new THREE.Geometry();
	if(direction=='v'){
		var v1 = new THREE.Vector3(x+10,y+50,z);
		var v2 = new THREE.Vector3(x-10,y+50,z);
		var v3 = new THREE.Vector3(x-10,y-50,z);
		var v4 = new THREE.Vector3(x+10,y-50,z);
		var v5 = v1;//*/
	} else {
		var v1 = new THREE.Vector3(x+50,y+10,z);
		var v2 = new THREE.Vector3(x-50,y+10,z);
		var v3 = new THREE.Vector3(x-50,y-10,z);
		var v4 = new THREE.Vector3(x+50,y-10,z);
		var v5 = v1;//*/
	}
	geometry.vertices.push(v1);
	geometry.vertices.push(v2);
	geometry.vertices.push(v3);
	geometry.vertices.push(v4);
	geometry.vertices.push(v5);//*/
	geometry.faces.push(new THREE.Face3(0,1,2,4,5));
	//geometry.computeFaceNormals();
	var material = new THREE.LineBasicMaterial({
        color: 0x000000,
		linewidth: 3
    });//*/
	var line = new THREE.Line(geometry, material);
	return line;
}