class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.audio('menu_background','./assets/MENU.wav');
        this.load.image('Title','./assets/Title.png');
        // load audio (if any)
        
        this.load.image('background', './assets/Bg.png');
   }

   create(){
    // place background
    
    this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
    this.menu_back = this.sound.add('menu_background');
    this.menu_back.loop = true;
    this.menu_back.play();
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
    
    //this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'Endless Runner', menuConfig).setOrigin(0.5);
    this.title = this.add.image(50,100,'Title').setOrigin(0,0);
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding), 'ENTER TO START', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding) + 100, 'Press C to view credits', menuConfig).setOrigin(0.5);
    // define keys
    keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
   }

   update(){
    this.background.tilePositionX -= backgroundSpeed;
    if(Phaser.Input.Keyboard.JustDown(keyENTER)) {
        this.menu_back.stop();
        this.scene.start('playOneScene');
        }
   
    }
}
