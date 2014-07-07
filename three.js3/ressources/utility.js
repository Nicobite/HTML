/**
	Returns a line in the shape of a circle.
*/
function draw_circle(radius,resolution,x,y){
	var geometry = new THREE.CircleGeometry( radius, resolution );
	geometry.vertices.shift();
	var material = new THREE.LineBasicMaterial({
        color: 0x000000,
		linewidth: 3
    });
	var line = new THREE.Line(geometry, material);
	line.position.x = x;
	line.position.y = y;
	return line;
}