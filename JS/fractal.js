
var canvas = document.getElementById("fCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

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
    
    draw(0, -len, len*leftMod, -ang, branchWidth*0.8)
    draw(0, -len, len*rightMod, +ang, branchWidth*0.8)

    ctx.restore();
}


//FRACTAL VARIABLES;
//
//Grabs sliders by #id;
//grabs each display div by #id;
//Also initializes each modifier to a basic value;

//Angle Slider
var sliderAngle = document.getElementById("slider-angle");
var ang = 15;
var dispAng = document.getElementById("displayAngle");
dispAng.textContent = "Angle: " + ang;

//Length Slider
var sliderLength = document.getElementById("slider-length");
var sLen = 150
var dispLen = document.getElementById("displayLength");
dispLen.textContent = "Length: " + sLen;

//Branch width slider
var sliderBranch = document.getElementById("slider-branch");
var branchWid = 5;
var dispBranch = document.getElementById("displayBranch");
dispBranch.textContent = "Thickness: " + branchWid;

//Right length modifier
var sliderRight = document.getElementById("slider-right");
var rightMod = 0.8;
var dispRight = document.getElementById("displayRight");
dispRight.textContent = "Right modifier: " + rightMod;

//Left length modifier
var sliderLeft = document.getElementById("slider-left");
var leftMod = 0.8;
var dispLeft = document.getElementById("displayLeft");
dispLeft.textContent = "Left modifier: " + leftMod;



// Live updates every x ms, indicated by number at the end of setInterval() func;
setInterval(function() {

    //Updating variables 
    ang = sliderAngle.value;
    leftMod = (sliderLeft.value)/10;
    rightMod = (sliderRight.value)/10;
    sLen = sliderLength.value;
    branchWid = sliderBranch.value;

    //Printing slider values
    dispAng.textContent = "Angle: " + ang;
    dispLeft.textContent = "Left modifier: " + leftMod;
    dispRight.textContent = "Right modifier: " + rightMod;
    dispBranch.textContent = "Thickness: " + branchWid;
    dispLen.textContent = "Length: " + sLen;

    //clear canvas and print updated values
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, canvas.height/1.2, sLen, 0, branchWid);
    }, 50)

//OLD EVENT LISTENER METHOD; JUST IN CASE setInterval is too laggy;

// function called when slider input changes, ANGLE
// sliderAngle.addEventListener("change", function() {
//     ang = sliderAngle.value;
//     dispAng.textContent = "Angle: " + ang;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     draw(canvas.width/2, 800, sLen, 0, branchWid);
// })