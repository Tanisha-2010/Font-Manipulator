difference = 0;
leftWrist_x = 0;
rightWrist_x = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(570, 500);

    canvas = createCanvas(550, 500);
    canvas.position(890, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is initialised !!!");
}

function draw() {
    background("lightyellow");

    document.getElementById("size").innerHTML = "The Height and Width of the Text is " + difference + "px";
    textSize(difference);
    stroke("pink");
    text("Focus on the Outcome, not on the Obstacle", 10, 340);
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);

        leftWrist_x = result[0].pose.leftWrist.x;
        rightWrist_x = result[0].pose.rightWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
        console.log("Left Wrist =" + leftWrist_x + "Right Wrist = " + rightWrist_x + "Diffrence = " + difference);
    }
}