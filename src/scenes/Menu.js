class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        // load audio (if any)
   }

   create(){
    // place background
    this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

     // menu text configuration
     let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#ff4d00',
        color: '#000',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
    this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'Endless Runner', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding), 'ENTER to continue', menuConfig).setOrigin(0.5);

    // define keys
    keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
   }

   update(){
    this.background.tilePositionX -= backgroundSpeed;
    if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
        this.scene.start('playOneScene');
        }
    }
}