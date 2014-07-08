/* http://stackoverflow.com/questions/10806529/threejs-webgl-most-performant-way-for-just-cubes
		^ nécessaire pour la suite par souci de performance */

		
	//TODO Si les linewidth pouvaient scale avec le zoom, la vie serait plus belle.		
		

var TR_WIDTH = 7;
var TR_HEIGHT = 50;
var ARROW_FACTOR = 1;
var ARROW_ANGLE = 0.52; /* pi/6 */
		
		
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
		var v1 = new THREE.Vector3(x+TR_WIDTH,y+TR_HEIGHT,z);
		var v2 = new THREE.Vector3(x-TR_WIDTH,y+TR_HEIGHT,z);
		var v3 = new THREE.Vector3(x-TR_WIDTH,y-TR_HEIGHT,z);
		var v4 = new THREE.Vector3(x+TR_WIDTH,y-TR_HEIGHT,z);
		var v5 = v1;//*/
	} else {
		var v1 = new THREE.Vector3(x+TR_HEIGHT,y+TR_WIDTH,z);
		var v2 = new THREE.Vector3(x-TR_HEIGHT,y+TR_WIDTH,z);
		var v3 = new THREE.Vector3(x-TR_HEIGHT,y-TR_WIDTH,z);
		var v4 = new THREE.Vector3(x+TR_HEIGHT,y-TR_WIDTH,z);
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
		linewidth: 2
    });//*/
	var line = new THREE.Line(geometry, material);
	return line;
}


/**
	Returns a line in the shape of a transition but not as convincing
*/
function draw_transition_thin(x,y,z,direction){
	/* Creating vertices */
	var geometry = new THREE.Geometry();
	if(direction=='v'){
		var v1 = new THREE.Vector3(x,y+50,z);
		var v2 = new THREE.Vector3(x,y-50,z);
	} else {
		var v1 = new THREE.Vector3(x+50,y,z);
		var v2 = new THREE.Vector3(x-50,y,z);
	}
	geometry.vertices.push(v1);
	geometry.vertices.push(v2);
	geometry.faces.push(new THREE.Face3(0,1));
	//geometry.computeFaceNormals();
	var material = new THREE.LineBasicMaterial({
        color: 0x000000,
		linewidth: 12
    });//*/
	var line = new THREE.Line(geometry, material);
	return line;
}


/**
	Returns an arrow.
*/
function draw_arrow(x1,y1,x2,y2,z){
	var length = 500; var hex = 0xff0000;
	var arrow = new THREE.ArrowHelper( new THREE.Vector3( x2-x1, y2-y1, z )
									 , new THREE.Vector3( x1, y1, z )
									 , Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
									 , hex
									 , 50
									 , 50);
	return arrow;
}


/**
	Returns an arrow as well without using arrowHelper.
*/
function draw_arrow2(x1,y1,x2,y2,z){
	var geometry = new THREE.Geometry();
	var norm = new THREE.Vector3(x2-x1,y2-y1,z).normalize();
	var v1 = new THREE.Vector3(x1,y1,z);
	var v2 = new THREE.Vector3(x2,y2,z);
	//TODO
	var v3 = new THREE.Vector3(-1000,0,z);
	var v4 = new THREE.Vector3(-1000,-100,z);
	
	
	/*
	.applyAxisAngle(axis, angle) this
	axis -- A normalized Vector3
	angle -- An angle in radians
	Applies a rotation specified by an axis and an angle to this vector. 
	*/
	
	geometry.vertices.push(v1);
	geometry.vertices.push(v2);
	geometry.vertices.push(v3);
	geometry.vertices.push(v2);
	geometry.vertices.push(v4);
	geometry.faces.push(new THREE.Face3(0,1,2,4,5));
	var material = new THREE.LineBasicMaterial({
        color: 0x000000,
		linewidth: 1
    });//*/
	var line = new THREE.Line(geometry, material);
	return line;
}