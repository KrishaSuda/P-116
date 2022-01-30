lipsX = 0;
lipsY = 0;

function preload(){
    red_lips = loadImage("file:///D:/coding/Coding%20Files/Projects/P-114/Red_lips.png");
    pink_lips = loadImage("file:///D:/coding/Coding%20Files/Projects/P-114/Pink_lips.png");
    purple_lips = loadImage("file:///D:/coding/Coding%20Files/Projects/P-114/Purple_lips.png");
    blue_lips = loadImage("file:///D:/coding/Coding%20Files/Projects/P-114/Blue_lips.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(error,results){
    if(results.length > 0){
        console.log(results);
        lipsX = results[0].pose.nose.x;
        lipsY = results[0].pose.nose.y;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
    if(error){
        console.error(error);
    }
}

function draw(){
    image(video,0 ,0 , 400, 300);
    image(red_lips ,lipsX, lipsY, 30, 30);
    image(pink_lips ,lipsX, lipsY, 30, 30);
    image(purple_lips ,lipsX, lipsY, 30, 30);
    image(blue_lips ,lipsX, lipsY, 30, 30);
}

function take_snapshot(){
    save("myFilterImage.png");
}