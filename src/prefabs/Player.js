class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);   // add physics
        this.setImmovable();
        this.moveSpeed = 4;         // pixels per frame
    }
    update() {
        // left/right movement
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }

            else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
            // Variables that would be used to determine if car was too far up or down might not need
            // this.y >= borderUISize - this.height
            // this.y <= game.config.height - borderUISize - this.height
            if (Phaser.Input.Keyboard.JustDown(keyUP) && this.y >= 2.5 * laneLength) {
                this.y -= laneLength;
            } 

            else if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.y <= 5 * laneLength) {
                this.y += laneLength;
            }
        }
    }