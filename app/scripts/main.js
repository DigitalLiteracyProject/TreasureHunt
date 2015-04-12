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
	console.log(values)
}