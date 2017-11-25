var pic = new Image();
pic.src = "resources/Cloud.png";
var pic2 = new Image();
pic2.src = "resources/BlueCar.png";
var pic3 = new Image();
pic3.src = "resources/RedCar.png";
var pictClouds = [];
var pictCars = []

function initialize() {
    pictClouds.push(createImage("resources/Cloud.png", "Cloud1", -500, 70));
    pictClouds.push(createImage("resources/Cloud.png", "Cloud2", -300, 15));
    pictClouds.push(createImage("resources/Cloud.png", "Cloud2", -100, 50));
    pictCars.push(createImage("resources/BlueCar.png", "BlueCar", -550, 390));
    pictCars.push(createImage("resources/RedCar.png", "RedCar", -200, 390));
    drawBackground();
    drawBackgroundStuff();


}



//this function creates an image object.  The properties of the object are set when it is called and
//can be used with or without an array
var createImage = function(src, title,xcoord,ycoord) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    return img;
};

function startAnimation() {
    animate();
}
function stopAnimation() {
    cancelAnimationFrame(a);
}
//all functions in this method will run at the speed of your computers frame rate
function animate(){
    a=requestAnimationFrame(animate);
    drawBackground();
    drawBackgroundStuff();
    drawClouds();
    drawCars();
}

function drawBackground() {
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
function drawClouds() {
    for(i = 0;i<pictClouds.length;i++){
        pictClouds[i].left+=1;
        ctx.drawImage(pictClouds[i],pictClouds[i].left, pictClouds[i].top, 80,50);
        if(pictClouds[i].left>500){
            pictClouds[i].left = -200;
        }
    }


}
function drawCars() {
    for (i = 0; i < pictCars.length; i++) {
        pictCars[i].left += 5;
        ctx.drawImage(pictCars[i], pictCars[i].left, pictCars[i].top, 180, 110);
        if (pictCars[i].left > 500) {
            pictCars[i].left = -200;
        }
    }

}

function drawBackgroundStuff() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#27d1ff";
    ctx.fillRect(0, 0, 500, 250);
    ctx.fillStyle = "#35cd4b";
    ctx.fillRect(0, 250, 500, 250);
    ctx.fillStyle = "#505050";
    ctx.fillRect(0, 425, 500, 75);
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineWidth = 10;
    ctx.lineTo(50, 250);
    ctx.strokeStyle = "#874400";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(50, 200, 50, 0, 7);
    ctx.fillStyle = "#146613";
    ctx.fill();
    //ctx.stroke();
}
