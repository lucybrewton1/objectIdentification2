status = "";
img= "";
function preload() {
    img=loadImage("tvArea.jpg");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function draw() {
    image(img,0,0,600,500);
}
function modelLoaded() {
    console.log("Model is loaded");
    objectDetector.detect(img,gotResults);
}
function gotResults(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}