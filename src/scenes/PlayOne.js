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
        // boolean to determine whether or not to be hit by obstacles
        this.hitByObstacle = false;

        // place background
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // place holder buildings
        this.add.rectangle(0, 0, game.config.width, borderUISize * 3, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize * 2, game.config.width, borderUISize * 3,  0xFFFFFF).setOrigin(0, 0);


        // add player
       this.player = new Player(this, 2 * (borderUISize + borderPadding), game.config.height/2, 'car').setOrigin(0.5, 0);
       // add obstacleOneGroup

       this.ObstacleOneGroup = this.add.group({
        runChildUpdate: true,     // updates to each child
        runChildtoggleForward: true
    });

       // add obstacleOne (x3)
       this.obstacleOne01 = this.createObstacleOne(game.config.width + borderUISize*6, borderUISize*4);
       this.obstacleOne02 = this.createObstacleOne(game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2);
       this.obstacleOne03 = this.createObstacleOne(game.config.width, borderUISize*6 + borderPadding*4);

       // set up Policecar group
       this.policeCarGroup = this.add.group({
        runChildUpdate: true,     // updates to each child
        runChildtoggleForward: true
    });

       // add row of police cars
       this.policeCar01 = this.createPoliceCar(borderUISize, game.config.height/2 - (2 * laneLength));
       this.policeCar02 = this.createPoliceCar(borderUISize, game.config.height/2 - (laneLength));
       this.policeCar03 =  this.createPoliceCar(borderUISize, game.config.height/2);
       this.policeCar04 = this.createPoliceCar(borderUISize, game.config.height/2 + (laneLength));
       this.policeCar05 = this.createPoliceCar(borderUISize, game.config.height/2 + (2 * laneLength));
       

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        // GAME OVER flag
        this.gameOver = false;

    }
    update(){
        // update
        if (!this.gameOver){
        this.background.tilePositionX += backgroundSpeed;
        this.player.update();
        }

        else if (this.gameOver == true){
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', '28px').setOrigin(0.5);
        }

        // check collisions with policeCars
        this.physics.world.collide(this.player, this.policeCarGroup, this.overCollision, null, this);

        if (!this.hitByObstacle){
            // check collisions with obstacleOne
            this.physics.world.collide(this.player, this.ObstacleOneGroup, this.backCollision, null, this);
        }
    }

    //create methods

    // set up createPoliceCar method
    // (creates police Car adds it to group and returns it)
    createPoliceCar(x, y){
       // add row of police cars
       let policeCarX = new PoliceCar(this, x, y, 0).setOrigin(0.5, 0);
       this.policeCarGroup.add(policeCarX);
       return policeCarX;
    }

    createObstacleOne(x, y){
        let obstacleOneX = new ObstacleOne(this, x, y, 'obstacleOne', 0).setOrigin(0,0);
        this.ObstacleOneGroup.add(obstacleOneX);
        return obstacleOneX;
    }

    //collision callbacks

    // collision that causes game over
    overCollision(){
        this.gameOver = true;
    }

    // collision that causes player to move back
    backCollision(){
        this.policeCar01.forward = true;
        this.policeCar02.forward = true;
        this.policeCar03.forward = true;
        this.policeCar04.forward = true;
        this.policeCar05.forward = true;
        backgroundSpeed -= 1;
        this.hitByObstacle = true;
        console.log("hit");
        this.time.delayedCall(1000, () => {
            this.hitByObstacle = false;
            this.policeCar01.forward = false;
            this.policeCar02.forward = false;
            this.policeCar03.forward = false;
            this.policeCar04.forward = false;
            this.policeCar05.forward = false;
            backgroundSpeed += 1;
            console.log("good again");
        }, null, this);
    }
}