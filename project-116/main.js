nosex="";
nosey="";

function preload(){
lip=loadImage("https://i.postimg.cc/XJKB1xyD/584c61d3269a83097a7d04c9-removebg-preview.png")
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
posenet=ml5.poseNet(video , modelloaded);
posenet.on("pose",getpose);
}
function getpose(results){
    if(results.length>0){
        nosex=results[0].pose.nose.x-14;
        nosey=results[0].pose.nose.y+15;
console.log(results);
console.log('nose x'+nosex);
console.log('nose y'+nosey);
    }
}
function modelloaded(){
    console.log("poseNet is loaded");
}
function draw(){
image(video,0,0,300,300);
fill("red");
stroke("brown");

image(lip,nosex,nosey,30,30);

}
function sanpshot(){
    save("newpic.jpg");
}