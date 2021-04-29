class PoliceCar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame){
        super(scene, x, y,  'policeCar', frame);
        scene.add.existing(this);   // add to existing scene
        scene.physics.add.existing(this);   // add physics
        this.forward = false; // boolean to allow police cars to go forward
    }
    update(){
        // move police car if this.forward true
        if(this.forward == true){
            this.x += 1;
        }
    }
}