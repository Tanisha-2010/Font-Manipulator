function setup() {
    video = createCapture(VIDEO);
    video.size(570, 500);

    canvas = createCanvas(550, 500);
    canvas.position(890, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded() {
    console.log("Model is initialised !!!");
}

function draw() {
    background("lightyellow");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
    }
}