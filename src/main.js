/*
    I'M LATE!
    Completed by 05/04/2021
    by Zackary Steinmetz, Ethan Jung, Alexander Barclay, Gabrielle Velasco
    creative tilt:
    We are proud of implementation of random textures spawn that the obstacles spawn at random positions, types, and textures
    We are also proud of the cars and obstacles art we use because they fit the theme.
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
    scene: [ Menu,  PlayOne, Credit]
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

let obstacleOneDelay = 5000;
let obstacleTwoDelay = 12000;

let menu_back;

// reserve keyboard bindings
let keyENTER, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyR, keyC;