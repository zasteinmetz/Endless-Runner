class PoliceCar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        scene.physics.add.existing(this);   // add physics
    }
}