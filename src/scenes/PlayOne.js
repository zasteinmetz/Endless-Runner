class PlayOne extends Phaser.Scene {
    constructor(){
        super("playOneScene");
    }
    preload(){ 
        // load images/title sprites
    }
    create(){
        // place starfield
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
    }
    update(){
        this.background.tilePositionX -= backgroundSpeed;
    }
}