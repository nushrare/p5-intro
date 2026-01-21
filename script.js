var list = [];
// identical to "let"

function preload() {
    list = loadJSON("data.json");
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    //   fill("yellow")
    //   circle(mouseX, mouseY, 100);
    //   fill("orange");
    //   rect(70, 20, 50, 60);
    //   fill("black");
    textAlign("center");
    textSize(25);
    text("Canada's Major Exports", 200, 40);

    //Iterate through the list and place elements
    Object.values(list).map((item, index) => {
        rect(50, index * 30 + 70, item.amount, 10);
        textSize(12);
        textAlign("left");
        text(item.name, 50, index * 30 + 65);
    });
}