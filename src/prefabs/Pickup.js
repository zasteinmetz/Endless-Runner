class Pickup extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        scene.physics.add.existing(this);   // add physics
        //this.setVelocityX(roadSpeed); // added velocity based on speed of 
        this.setImmovable();
    }
    update(){
        // move obstacle left
        this.x -= backgroundSpeed;
        // destroy when reach edge
        if(this.x <= - this.width) {
            this.destroy();
            //console.log("destroyed");
        }
    }
}