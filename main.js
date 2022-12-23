nx = "";
ny = "";
function preload()
{
 filter = loadImage("filter.png");
}
function setup()
{
 canvas = createCanvas(350,300);
 canvas.center();
 camera = createCapture(VIDEO);
 camera.size(350, 300);
 camera.hide();
 p = ml5.poseNet(camera, modelLoaded);
 p.on('pose', gotPoses);
}
function draw()
{
 background("white");
 image(camera, 0, 0, canvas.width, canvas.height);
 image(filter, nx-60, ny-50, 120, 50);
}
function modelLoaded()
{
    console.log("Model has been loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y
    }
}
function capture()
{
    save('Clown.png');
}