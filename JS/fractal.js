
var canvas = document.getElementById("fCanvas");
var ctx = canvas.getContext("2d");

function draw(startX, startY, len, angle, branchWidth){
    ctx.lineWidth = branchWidth;
    ctx.beginPath();
    ctx.save();
    
    ctx.translate(startX,startY);
    ctx.rotate(angle*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-len);
    ctx.stroke();

    if(len<10) {
        ctx.restore();
        return;
    }
    
    draw(0, -len, len*0.8, -ang, branchWidth*0.8)
    draw(0, -len, len*0.8, +ang, branchWidth*0.8)

    ctx.restore();
}

var slider = document.getElementById("slider");
var ang = 15;
var disAng = document.getElementById("displayAngle");
disAng.innerHTML = "Angle: " + ang;

// function called when slider input changes, LESS LAGGY
// slider.addEventListener("change", function() {
//     ang = slider.value;
//     disAng.innerHTML = "Angle: " + ang;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     draw(canvas.width/2, 800, 150, 0, 5);
// })


// Live updates, MORE LAGGY
setInterval(function() {
    ang = slider.value;
    disAng.innerHTML = "Angle = " + ang;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, 150, 0, 5);
    }, 100)



//First drawing of the fractal
draw(canvas.width/2, 800, 150, 0, 5);