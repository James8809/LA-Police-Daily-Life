class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        this.load.image('truck', './assets/truck_copy.png');
        this.load.image('highway', './assets/new_Freeway.png');
        this.load.image('police', './assets/police.png');
        this.load.spritesheet('policeAnim', './assets/spritesheet.png',{
            frameWidth:105,
            frameHeight:59
        });
        this.load.spritesheet('truckAnim', './assets/truck_spritesheet.png',{
            frameWidth:199,
            frameHeight:76,
        });
        this.load.audio('audio_background', ['assets/background.wav'])
    }
    create() {
        this.physics.world.setBounds(0, 0, 1050, 600);
        this.truckSpeed = -450;
        this.truckSpeedMax = -1000;
        this.truckGroup = this.add.group({
            runChildUpdate: true
        });

        this.time.delayedCall(2500, () => { 
            this.addTruck(); 
        });

        this.highway = this.add.tileSprite(0, 0, 3000, 600, 'highway').setOrigin(0, 0);

        this.gamerOver = false;
        this.p1Police = new Police(this, 10, 18.5,'police').setOrigin(0,0);
        
        this.anims.create({
            key:"police_anim",
            frames: this.anims.generateFrameNumbers('policeAnim'),
            framerate:20,
            repeat: -1
        });
        this.anims.create({
            key:"truck_anim",
            frames: this.anims.generateFrameNumbers('truckAnim'),
            framerate:20,
            repeat: -1
        });
        this.p1Police.play('police_anim');
         
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        let music = this.sound.add('audio_background');
        music.setLoop(true);
        music.play();
        /*
        musicConfig = {
            mute:false,
            volume:0.5,
            rate:1,
            detune:0,
            seek:0,
            loop:false,
            delay: 0
        }
        */
        //this.music.play(musicConfig);
        var spawn = true;
        console.log("version4");
        this.physics.add.overlap(this.p1Police,this.truckGroup,this.crash,null,this);
    }
    addTruck() {
        let laneChoose =  Phaser.Math.Between(0, 4);
        let laneChoose2 = Phaser.Math.Between(0, 4);
        while(laneChoose2 == laneChoose) {
            laneChoose2 = Phaser.Math.Between(0, 4);
        } 
        let truck1 = new Truck(this, w, truckMargin + 120*laneChoose, 'truck').setOrigin(0,0);
        let truck2 = new Truck(this, w, truckMargin + 120*laneChoose2, 'truck').setOrigin(0,0);
        truck1.play('truck_anim');
        truck2.play('truck_anim');
        truck1.spawn = true;
        this.truckGroup.add(truck1);
        this.truckGroup.add(truck2);
        
    }
    update() {
        if(!this.gameOver) {
            this.highway.tilePositionX += game.settings.startSpeed;
            this.p1Police.update();
            
            count++;
            if (count % 10 == 0 && game.settings.startSpeed < 30 && game.settings.carSpeed < 100) {
                game.settings.startSpeed += 0.05;
                game.settings.carSpeed += 0.02;
            }
        }
        if(this.gameOver) {
            this.scene.start("endingScene");
        }
    }
    crash() {
        this.gameOver = true;
        this.truckGroup.runChildUpdate = false;
        //this.music.stop();
    }
    
}