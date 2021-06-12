noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(550,500);
    canvas.position(580,150);
    video = createCapture(VIDEO);
    video.size(550,500)
    video.position(20,150)
    posenet =  ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    background('#969A97');
    fill('#0000FF');
    stroke('white');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "Side of the square = "+difference+"px"
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result)
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        console.log(leftWristX);
        console.log(rightWristX);
        difference = floor(leftWristX - rightWristX);
        
    }
}