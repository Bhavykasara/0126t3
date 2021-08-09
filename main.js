song="";

function preload() {
    
}

rws=0;
lws=0;
rwx=0;
rwy=0;
lwx=0;
lwy=0;

function setup() {
    canvas=createCanvas(400,300);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.hide();

    poseNet=ml5.poseNet(vedio,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        rws=results[0].pose.keypoints[10].score;
        lws=results[0].pose.keypoints[9].score;

        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;

        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
    }
}

function draw() {
    image(vedio,0,0,400,300);
}