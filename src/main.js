/*
    I'M LATE!
    Completed by 05/05/2021
    by Zackary Steinmetz, Ethan Jung, Alexander Barclay, Gabrielle Velasco
    For creative tilt we have menu music that persists across scenes, health pickups
    that only spawn when the player is damaged, and random textures that spawn with
    the obstacle's random spawning
    Also we able to remix a song online, and just in general we are proud of the assets
    we made
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

let obstacleOneDelay = 1000;
let obstacleTwoDelay = 5000;

let menu_back;
let firstTime = false;

// reserve keyboard bindings
let keyENTER, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyR, keyC;