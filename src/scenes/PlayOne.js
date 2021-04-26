class PlayOne extends Phaser.Scene {
    constructor(){
        super("playOneScene");
    }
    preload(){ 
        // load images/title sprites
    }
    create(){
        // place starfield
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
    }
    update(){
        this.background.tilePositionX -= backgroundSpeed;
    }
}