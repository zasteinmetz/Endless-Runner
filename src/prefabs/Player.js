class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        this.moveSpeed = 4;         // pixels per frame
    }
    update() {
        // left/right movement
        if(!this.isFiring){

            if(keyLEFT.isDown && this.y >= borderUISize - this.height) {
                this.y -= this.moveSpeed;
            }

            else if(keyRIGHT.isDown && this.y <= game.config.height - borderUISize - this.height){
                this.y += this.moveSpeed;
            }
        }
    }
}