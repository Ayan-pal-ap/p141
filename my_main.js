function setup() {
    canvas=createCanvas(600,600); 
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,600);
    video.hide();
    ml5=ml5.poseNet(video,ok);
    ml5.on("pose",Ans);
    canvas.parent("c");
}
rightX="";
rightY="";
right="";
function ok(){
    console.log("All ok");
}
function Ans(Result){
    if(Result){
        console.log(Result);
    }
    if(Result.length>0){
  rightX=Result[0].pose.rightWrist.x;
  rightY=Result[0].pose.rightWrist.y;
  right=Result[0].pose.score;

    }
}

function draw(){
    image(video,0,0,600,600);
    if(right>0.2){
        fill("#34eb92");
        stroke("#ff000d");
        circle(rightX,rightY,30);
    }
}