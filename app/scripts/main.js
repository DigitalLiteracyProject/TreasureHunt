"use strict";

var bw = 500;
var bh = 500;
var p = 0;
var minBury = 1;
var treasures = [];
var buried = 0;


function init() {
    var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	for (var x = 0; x <= bw; x += 50) {
	    context.moveTo(0.5 + x, p);
	    context.lineTo(0.5 + x, bh + p);
	}


	for (var x = 0; x <= bh; x += 50) {
	    context.moveTo(p, 0.5 + x);
	    context.lineTo(bw, 0.5 + x);
	}

	context.strokeStyle = "black";
	context.stroke();
}

function bury() {
	var values = {};
	// extract values from the form
	$.each($('#loc').serializeArray(), function(i, field) {
    	values[field.name] = field.value;
	});

	var x = values.xcor;
	var y = values.ycor;

	if (x > 9 || y > 9 || x < 0 || y < 0) {
		alert("Sorry, but those coordinates are out of range!");
		return;
	}

	// logicing the coordinates, adding to dictionary
	if (treasures[x,y]){
		alert("You have already buried a treasure here! Try again!");
		return;
	}

	treasures[[x,y]] = true;
	buried++;
	var x = x * 50 + 25;
	var y = y * 50 + 25;

	// get the canvas and draw the circle. have yet to determine the logic for
	// placing the circle
	var canvas = $("#canvas")[0].getContext("2d");
	canvas.beginPath();
	canvas.arc(x, y, 20, 0, 2 * Math.PI, false);
	canvas.fillStyle = 'yellow';
	canvas.fill();
	canvas.lineWidth = 2;
	canvas.strokeStyle = '#003300';
	canvas.stroke();
}

function gameBegin() {
	if (buried < minBury) {
		alert("You have yet to bury some treasures! You have " + (minBury - treasures.length) + " left to bury.");
		return;
	}

	$('#loc')[0].style.display="none";
	$('#hunt')[0].style.display="block";

	for (var trunk in treasures) {
		trunk = trunk.split(",");
		eraseCircle(trunk);
	}

}

// used to uncover treasure
function eraseCircle(xy){
	var canvas = $("#canvas")[0].getContext("2d");
	canvas.beginPath();
	canvas.arc(xy[0] * 50 + 25, xy[1] * 50 + 25, 10, 0, 2 * Math.PI, false);
	canvas.fillStyle = 'red';
	canvas.fill();
	canvas.lineWidth = 2;
	canvas.strokeStyle = '#003300';
	canvas.stroke();

}