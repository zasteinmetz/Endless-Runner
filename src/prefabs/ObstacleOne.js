class ObstacleOne extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.moveSpeed = 4;
    }
    update(){
        // move obstacle left
        this.x -= this.moveSpeed;
        // destroy when reach edge
        if(this.x <= 0 - this.width) {
            this.destroy();
        }
    }
}