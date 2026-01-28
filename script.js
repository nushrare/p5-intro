var list = [];
// identical to "let"

function preload() {
    list = loadJSON("data.json");
}


function setup() {
    createCanvas(400, 650);
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
        fill(item.color);
        rect(50, index * 30 + 70, item.amount / 180 * 300, 10);

        // 180 / 180 = 100%
        // 37 (machinery) / 180 = 21%

        textSize(12);
        textAlign("left");
        fill("black");
        text(item.name, 50, index * 30 + 65);

        textSize(30);
        textAlign("right");
        text(item.icon, 45, index * 30 + 80);
    });
}