/*
    I'M LATE!
    by Zackary Steinmetz, Ethan Jung, Alexander Barclay, Gabrielle Velasco
*/

//Game Configuration
let config = {
    type: Phaser.CANVAS,
    width : 640,
    height: 480,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            // wasn't sure how crutial this was so I added it
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Menu,  PlayOne]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height/15;
let laneLength = borderUISize * 2;
let borderPadding = borderUISize/3;
let backgroundSpeed = 3;
let moveSpeed = 4;
let hdistance = 0;
// road speed to determine velocity of object
let roadSpeed = -50;


// reserve keyboard bindings
let keyENTER, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyR;