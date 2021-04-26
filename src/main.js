//Game Configuration
let config = {
    type: Phaser.CANVAS,
    width : 640,
    height: 480,
    scene: [ Menu,  PlayOne]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;
let backgroundSpeed = 3;

// reserve keyboard bindings
let keyENTER, keyLEFT, keyRIGHT;