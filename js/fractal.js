
var canvas = document.getElementById("fCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function draw(startX, startY, len, angle, branchWidth, i, j){

    // ctx.strokeStyle = `rgb(0, ${Math.floor(255 * i)} , ${Math.floor(255 * j)})`;

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
    
    draw(0, -len, len*leftMod, -ang, branchWidth*0.8 , i+0.5 , j+0.5)
    draw(0, -len, len*rightMod, +ang, branchWidth*0.8 , i+0.5 , j+0.5)

    ctx.restore();
}


var ang;
var rightMod;
var leftMod;
// inital call for when page loads
grow();

function grow(){

    //reset color mods
    var i = 1;
    var j = 1;

    //Reset canvas width to fit window size
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    // Generate random length, width, anlge, and side modifiers
    //random * (max-min)+min;
    var len1 = Math.random() * (125 - 80) + 80;
    var branch1 = Math.random() * (10 - 4) + 4;
    ang = Math.random() * (60 - 10) + 10;
    rightMod = Math.random() * (0.8-0.5) + 0.5;
    leftMod = Math.random() * (0.9-0.4) + 0.4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(canvas.width/2, canvas.height/1.2, len1, 0, branch1,i,j);
}