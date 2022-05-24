var status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function model_loaded(){
    status = true;
}

function start(){
    object_detecter = ml5.objectDetecter("cocossd", model_loaded);
    document.getElementById("status").innerHTML = "status: object detecting";
}

function draw(){
    image(video, 0, 0, 380, 380);
}