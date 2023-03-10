song_venom="";
song_hope="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
song_venom = loadSound("Venom - Eminem-(DJMaza).mp3");
song_hope = loadSound("XXXTENTACION-Hope.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(430,250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet is instalized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("LeftWristX = " + leftWristX + " ,LeftWristY = " + leftWristY);
        console.log("RightWristX = " + rightWristX + " ,RightWristY = " + rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}