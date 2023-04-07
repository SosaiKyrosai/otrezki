
function put_label(){
var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var x0 = Number($('#x0').val());
	var y0 = Number($('#y0').val());
	var i1 = Number($('#i1').val());
	var i2 = Number($('#i2').val());
	var z = Number($('#z').val());
	var deg = Number($('#deg').val());
	var x = Math.round(x0 + Math.cos(deg * Math.PI / 180) * z);
	var y = Math.round(y0 + Math.sin(deg * Math.PI / 180) * z);
	var pointLabelX = Math.round(x0 + Math.cos(deg * Math.PI / 180) * ((z*i1)/i2));
	var pointLabelY = Math.round(y0 + Math.sin(deg * Math.PI / 180) * ((z*i1)/i2));

	//  Точка метки
 	ctx.beginPath();
	ctx.arc(pointLabelX, pointLabelY, 4, 0, 2 * Math.PI, true);
	ctx.fill();
}

function calc_point2(){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var x02 = Number($('#x02').val());
	var y02 = Number($('#y02').val());
	var z2 = Number($('#z2').val());
	var deg2 = Number($('#deg2').val());
	var x2 = Math.round(x02 + Math.cos(deg2 * Math.PI / 180) * z2);
	var y2 = Math.round(y02 + Math.sin(deg2 * Math.PI / 180) * z2);


	// Линия2
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'yellow';
	ctx.moveTo(x02, y02);
	ctx.lineTo(x2, y2);
	ctx.stroke();

		// Начальная точка 2
 	ctx.beginPath();
	ctx.arc(x02, y02, 4, 0, 2 * Math.PI, true);
	ctx.fill();

	ctx.font = "14px Tahoma";
	ctx.fillText('x02=' + x02 + ', y02=' + y02, x02 + 15, y02 + 15);

		// Конечная точка 2
  	ctx.beginPath();
	ctx.arc(x2, y2, 4, 0, 2 * Math.PI, true);
	ctx.fill();

	ctx.font = "14px Tahoma";
	ctx.fillText('x2=' + x2 + ', y2=' + y2, x2 + 15, y2 + 15);

}

function calc_point(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	var x0 = Number($('#x0').val());
	var y0 = Number($('#y0').val());
	var z = Number($('#z').val());
	var deg = Number($('#deg').val());
	var x = Math.round(x0 + Math.cos(deg * Math.PI / 180) * z);
	var y = Math.round(y0 + Math.sin(deg * Math.PI / 180) * z);





	// Линия
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'red';
	ctx.moveTo(x0, y0);
	ctx.lineTo(x, y);
	ctx.stroke();



	// Начальная точка
 	ctx.beginPath();
	ctx.arc(x0, y0, 4, 0, 2 * Math.PI, true);
	ctx.fill();

	ctx.font = "14px Tahoma";
	ctx.fillText('x0=' + x0 + ', y0=' + y0, x0 + 15, y0 + 15);



	// Конечная точка
  	ctx.beginPath();
	ctx.arc(x, y, 4, 0, 2 * Math.PI, true);
	ctx.fill();

	ctx.font = "14px Tahoma";
	ctx.fillText('x=' + x + ', y=' + y, x + 15, y + 15);



}


$("#x0,#y0,#z,#deg").keyup(function(event){
	if(event.keyCode == 13){
		calc_point();
	}
});