"use strict";

	var bw = 400;
	var bh = 400;
	var p = 10;


function init() {


 // 	var graphics = new createjs.Graphics().beginFill("DeepSkyBlue").drawRect(0, 0, 100, 100);
	// var rect = new createjs.Shape(graphics);

 //    var stage = new createjs.Stage("canvas");
 //    stage.addChild(rect);
 //    stage.update();

    var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	for (var x = 0; x <= bw; x += 40) {
	    context.moveTo(0.5 + x + p, p);
	    context.lineTo(0.5 + x + p, bh + p);
	}


	for (var x = 0; x <= bh; x += 40) {
	    context.moveTo(p, 0.5 + x + p);
	    context.lineTo(bw + p, 0.5 + x + p);
	}

	context.strokeStyle = "black";
	context.stroke();
}

function bury() {
	var values = {};
	$.each($('#loc').serializeArray(), function(i, field) {
    	values[field.name] = field.value;
	});
	var x = values.xcor;
	var y = values.ycor;

	// var stage = new createjs.Stage("canvas");
	var canvas = $("#canvas")[0].getContext("2d");
	canvas.beginPath();
	canvas.arc(x, y, 20, 0, 2 * Math.PI, false);
	canvas.fillStyle = 'yellow';
	canvas.fill();
	canvas.lineWidth = 2;
	canvas.strokeStyle = '#003300';
	canvas.stroke();
	// console.log(typeof(canvas));
	// console.log(typeof(stage));

	// var circle = new createjs.Shape();
    // circle.graphics.beginFill("red").drawCircle(x, y, 20);
    //Set position of Shape instance.
    // stage.addChild(circle);
    // stage.addChild(canvas);
    //Update stage will render next frame
    // stage.update();
}