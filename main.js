noseX = 0;
noseY = 0;


function preload(){
    red = loadImage("Red_lips.png");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.position(560,175);
    video = createCapture(VIDEO)
    video.size(300,600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x+30;
        noseY = results[0].pose.nose.y-120;
        console.log("lips x = " + noseX);
        console.log("lips y = " + noseY);
    }
}

function draw(){
    image(video,0 ,0 , 400, 300);
        image(red ,noseX, noseY, 55, 55);
}

function take_snapshot(){
    save("myFilterImage.png");
}
