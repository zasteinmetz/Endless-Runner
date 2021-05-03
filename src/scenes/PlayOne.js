class PlayOne extends Phaser.Scene {
    constructor(){
        super("playOneScene");
    }
    preload(){ 
        // load images/title sprites
        this.load.atlas('atlas', './assets/textureAtlas.png', './assets/atlas.json');

        this.load.audio('play_background', './assets/PLAY.wav');
        this.load.audio('over_background', './assets/OVER.wav');
        
    }
    create(){
        // boolean to determine whether or not to be hit by obstacles
        this.play_back = this.sound.add('play_background');
        this.play_back.loop = true;
        this.play_back.play();
        this.hitByObstacle = false;

        // place background
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        // place holder buildings
        this.add.rectangle(0, 0, game.config.width, borderUISize * 3, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize * 2, game.config.width, borderUISize * 3,  0xFFFFFF).setOrigin(0, 0);
        this.distance = 0;

        // add player
        this.player = new Player(this, 2 * (borderUISize + borderPadding), game.config.height/2, 'atlas', 'playerCar').setOrigin(0.5, 0);
        
        // add obstacleOneGroup
        this.ObstacleOneGroup = this.add.group({
        runChildUpdate: true     // updates to each child
    });

       this.obstacleOne01 = this.spawnObstacleOne();

       let spawnTimer = this.time.addEvent({
           delay: 5000,
           callback: this.spawnObstacleOne,
           callbackScope: this,
           loop: true
       });

       // set up Policecar group
       this.policeCarGroup = this.add.group();

       // add row of police cars
       this.policeCar01 = this.createPoliceCar(borderUISize, game.config.height/2 - (2 * laneLength));
       this.policeCar02 = this.createPoliceCar(borderUISize, game.config.height/2 - (laneLength));
       this.policeCar03 =  this.createPoliceCar(borderUISize, game.config.height/2);
       this.policeCar04 = this.createPoliceCar(borderUISize, game.config.height/2 + (laneLength));
       this.policeCar05 = this.createPoliceCar(borderUISize, game.config.height/2 + (2 * laneLength));
       
       //distance tracker
       this.distancetext = this.add.text(game.config.width - 50, game.config.height/2 - 110, this.distance, '28px');

       this.timeEvent = this.time.addEvent({ delay: 100, callback: () =>{this.distance += 1; this.distancetext.text = this.distance}, callbackScope: this, loop: true });

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
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
            this.timeEvent.paused = true;
            if(hdistance < this.distance){
                hdistance = this.distance;
                          
            }
            if(Phaser.Input.Keyboard.JustDown(keyR)){
                this.scene.restart();
            }
            this.sound.play('over_background');
            this.play_back.stop();
            
            
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', '28px').setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 50, 'Furthest distance: '+ hdistance).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 100, 'Press R to retry').setOrigin(0.5);
        }

        // check collisions with policeCars
        this.physics.world.collide(this.player, this.policeCarGroup, this.overCollision, null, this);

        if (!this.hitByObstacle){
            // check collisions with obstacleOne
            this.physics.world.collide(this.player, this.ObstacleOneGroup, this.backCollision, null, this);
        }
    }

    //random placement method(s)
    spawnObstacleOne(){
        let lane = Math.floor(Math.random() * 4.0);
        let obstacleNum = Math.floor(Math.random() * 4.0);
        let obstacleText = 'slowObsCrate'
        
        let x = game.config.width;
        let y = 0.0;
        switch(lane) {
            case 0.0:
                y = game.config.height/2 - (2 * laneLength);
                break;
            case 1.0:
                y = game.config.height/2 - (laneLength);
                break;
            case 2.0:
                y = game.config.height/2;
                break;
            case 3.0:
                y = game.config.height/2 + (laneLength);
                break;
            case 4.0:
                y = game.config.height/2 + (laneLength);
                break;
            default:
                console.log("Switch Defaulted");
            
        }

        switch(obstacleNum) {
            case 0.0:
                obstacleText = 'slowObsCrate';
                break;
            case 1.0:
                obstacleText = 'slowObsManhole';
                break;
            case 2.0:
                obstacleText = 'slowObsStop';
                break;
            default:
                console.log("Switch 2 Defaulted");

        }
        
        let obstacleOneSpawn = new ObstacleOne(this, x, y, 'atlas', obstacleText).setOrigin(0,0);
        this.ObstacleOneGroup.add(obstacleOneSpawn);
        return obstacleOneSpawn;

    }

    //create methods

    // set up createPoliceCar method
    // (creates police Car adds it to group and returns it)
    createPoliceCar(x, y){
       // add row of police cars
       let policeCarX = new PoliceCar(this, x, y, 'policeCar').setOrigin(0.5, 0);
       this.policeCarGroup.add(policeCarX);
       return policeCarX;
    }

    //collision callbacks

    // collision that causes game over
    overCollision(){
        this.gameOver = true;
    }

    // collision that causes player to move back
    backCollision(){
        this.player.x -= 25;
        this.player.health -= 1;
        this.hitByObstacle = true;
        console.log("hit");
        this.time.delayedCall(1000, () => {
            this.hitByObstacle = false;
            console.log("good again");
        }, null, this);
    }
}