class Credit extends Phaser.Scene{
    constructor(){
        super("Credit");
    }

    preload(){        
        this.load.image('background', './assets/Bg.png');
   }

   create(){
    // place background
    this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
     // menu text configuration
     let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '35px',
        
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding), 'Credits:\nProgramming: Zackary Steinmetz, Alexander Barclay\nArt Design: Alexander Barclay, Gabrielle Velasco\nAudio Design: Gabrielle Velasco, Ethan Jung\nUI: Ethan Jung, Gabrielle Velasco\nGame Design: Zackary Steinmetz, Ethan Jung,\nAlexander Barclay, Gabrielle Velasco', '26px').setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding) + 150, 'Press C to back to Menu', menuConfig).setOrigin(0.5);
    // define keys
    keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
   }

   update(){
    this.background.tilePositionX -= backgroundSpeed;
    if(Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start('menuScene');
            }
    }
}