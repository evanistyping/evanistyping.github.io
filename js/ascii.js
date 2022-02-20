// The gradient
const density = "      _.'`,-=+:;cba!?0123456789$W#@Ñ";

var button = document.getElementById("button");
var run = true;

// Text div
const text = document.getElementById('ascii');

// canvas
var canvas = document.getElementById('canv');
const ctx = canvas.getContext("2d");
canvas.style.display = 'none';

// Image
// const image = new Image();
// image.src = "images/sus64.png";


// VIDEO
// ACCESSING CAMERA CODE - STACK OVERFLOW
var video = document.querySelector('video');
video.style.display = "none";
var constraints = { video: { width: 64, height: 64 } };
navigator.mediaDevices.getUserMedia(constraints)
    .then(function (mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) { console.log(err.name + ": " + err.message); })


    // ON PAGE LOAD
window.addEventListener('load', (event) => {
    console.log('page has loaded');

    var intervalId = setInterval(function(){draw()},40);


    function draw() {

        // clear text
        text.textContent = '';

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0);
        // image data
        const data = ctx.getImageData(0, 0, video.width, video.height);

        let ascii = '';
        for (let i = 0; i < data.width; i++) {
            for (let j = 0; j < data.height; j++) {
                const index = (i * 4 * data.width) + (j * 4);
                const r = data.data[index];
                const g = data.data[index + 1];
                const b = data.data[index + 2];

                let avg = (r + g + b) / 3;
                const len = density.length;
                const charIndex = Math.floor(scale(avg, 0, 255, 0, len));

                const c = density.charAt(charIndex);
                if (c == ' ') {
                    ascii += '\xa0';
                }
                else{ ascii += c;}
                
                

                
            }
            // Line break
            ascii += String.fromCharCode(13);
        }
        // Update div with image
        text.textContent += ascii;
        // console.log("drawn");
        if(!run){
            clearInterval(intervalId);
            console.log("interval stopped");
        }
    }

    
    

});


// Function for mapping the average of 'r' 'g' 'b' to a character in the density string.
function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function stopCam(){
    console.log("Stop");
    run = false;
}