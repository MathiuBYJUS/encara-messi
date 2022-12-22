object=[];
status="";

function preload()
{
 video=createVideo("messi.mp4");

}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video.hiden();
}

function start()

{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="se estan detectando objetos";

}

function modelLoaded()
{
    
}

