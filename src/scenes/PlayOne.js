class PlayOne extends Phaser.Scene {
    constructor(){
        super("playOneScene");
    }
    preload(){ 
        // load images/title sprites
        this.load.image('car', './assets/Car.png');
        this.load.image('policeCar', './assets/PoliceCar.png');
    }
    create(){
        // place background
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // place holder buildings
        this.add.rectangle(0, 0, game.config.width, borderUISize * 3, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize * 2, game.config.width, borderUISize * 3,  0xFFFFFF).setOrigin(0, 0);


        // add player
       this.player = new Player(this, 2 * (borderUISize + borderPadding), game.config.height/2, 'car').setOrigin(0.5, 0);

       // add obstacleOne (x3)
       // *Math.random()
       this.obstacleOne01 = new ObstacleOne(this, game.config.width + borderUISize*6, borderUISize*4, 'obstacleOne', 0, 30).setOrigin(0,0);
       this.obstacleOne02 = new ObstacleOne(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'obstacleOne', 0, 20).setOrigin(0,0);
       this.obstacleOne03 = new ObstacleOne(this, game.config.width, borderUISize*6 + borderPadding*4, 'obstacleOne', 0, 10).setOrigin(0,0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    update(){
        this.background.tilePositionX += backgroundSpeed;

        // update
        this.player.update();
        this.obstacleOne01.update();
        this.obstacleOne02.update();
        this.obstacleOne03.update();
    }
}