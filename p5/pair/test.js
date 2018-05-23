function setup(){
    createCanvas(800, 900);
    platform = createSprite(100, 100, 40, 40)
    brick = new group();
    for (let i = 0;i < 10;i++){
        let b = createSprite(
            (800 - (i * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)

    }
    for (let i = 10;i < 19;i++)
    {
        let b = createSprite(
            (800 - ((i - 10) * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)
    }
    for (let i = 19;i < 28;i++)
    {
        let b = createSprite(
            (800 - ((i - 19) * 85)), (70),
            (85), (30))
            b.shapeColor(255);
            brick.add(b)

    }
}
function draw(){
    background(0);
    drawSprites();
}