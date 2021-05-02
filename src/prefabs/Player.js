class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);   // add physics
        this.setImmovable();
        this.moveSpeed = 4;         // pixels per frame
        this.health = 4;            // dead at 0, 4 damage states while live including undamaged
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

            if (this.health == 4 && this.frame.name != 'playerCar'){
                this.setTexture('atlas','playerCar');
            }
            if (this.health == 3 && this.frame.name != 'playerCar1Dmg'){
                this.setTexture('atlas','playerCar1Dmg');
            }
            if(this.health == 2 && this.frame.name != 'playerCar2Dmg'){
                this.setTexture('atlas', 'playerCar2Dmg');
            }
            if (this.health == 1 && this.frame.name != 'playerCar3Dmg'){
                this.setTexture('atlas', 'playerCar3Dmg');
            }
            if (this.health == 0 && this.frame.name != 'playerCarDead'){
                this.setTexture('atlas', 'playerCarDead');
                this.moveSpeed = 0;
            }
        }
    }