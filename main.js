function setup() { 
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(40, 50, 20, 350);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(550, 50, 20, 350);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(90, 40, 460, 20);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(550, 50, 20, 350);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);

    fill(0, 180, 0);
    stroke(0, 180, 0);
    rect(90, 420, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 430, 80);
}

function take_snapshot() {
    save("framed_image.png")
}