
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

//Angle Slider
var sliderAngle = document.getElementById("slider-angle");
var ang = 15;
var dispAng = document.getElementById("displayAngle");
dispAng.innerHTML = "Angle: " + ang;

// function called when slider input changes, ANGLE
sliderAngle.addEventListener("change", function() {
    ang = sliderAngle.value;
    dispAng.innerHTML = "Angle: " + ang;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, sLen, 0, branchWid);
})

//Length Slider
var sliderLength = document.getElementById("slider-length");
var sLen = 150
var dispLen = document.getElementById("displayLength");
dispLen.innerHTML = "Length: " + sLen;

// function called when slider input changes: LENGTH
sliderLength.addEventListener("change", function() {
    sLen = sliderLength.value;
    dispLen.innerHTML = "Length: " + sLen;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, sLen, 0, branchWid);
})

//Branch width slider
var sliderBranch = document.getElementById("slider-branch");
var branchWid = 5;
var dispBranch = document.getElementById("displayBranch");
dispBranch.innerHTML = "Thickness: " + branchWid;

// function called when slider input changes: BRACH WIDTH
sliderBranch.addEventListener("change", function() {
    branchWid = sliderBranch.value;
    dispBranch.innerHTML = "Thickness: " + branchWid;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, sLen, 0, branchWid);
})

//Right length modifier
var sliderRight = document.getElementById("slider-right");
var rightMod = 0.8;
var dispRight = document.getElementById("displayRight");
dispRight.innerHTML = "Right modifier: " + rightMod;

// function called when slider input changes: BRACH WIDTH
sliderRight.addEventListener("change", function() {
    rightMod = (sliderRight.value)/10;
    dispRight.innerHTML = "Right modifier: " + rightMod;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, sLen, 0, branchWid);
})

//Left length modifier
var sliderLeft = document.getElementById("slider-left");
var leftMod = 0.8;
var dispLeft = document.getElementById("displayLeft");
dispLeft.innerHTML = "Left modifier: " + leftMod;

// function called when slider input changes: BRACH WIDTH
sliderLeft.addEventListener("change", function() {
    leftMod = (sliderLeft.value)/10;
    dispLeft.innerHTML = "Left modifier: " + leftMod;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, 800, sLen, 0, branchWid);
})





// Live updates, MORE LAGGY
// setInterval(function() {
//     ang = slider.value;
//     disAng.innerHTML = "Angle = " + ang;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     draw(canvas.width/2, canvas.height/1.2, 150, 0, 5);
//     }, 100)



//First drawing of the fractal
draw(canvas.width/2, 800, 150, 0, 5);