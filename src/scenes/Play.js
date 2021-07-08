class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        // trying
        this.load.image('truck', './assets/truck_copy.png');
        this.load.image('highway', './assets/new_Freeway.png');
        this.load.image('police', './assets/police.png');
        this.load.spritesheet('p1Police', './assets/spritesheet.png',{
            frameWidth:105,
            frameHeight:59
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

        this.highway = this.add.tileSprite(0, 0, 3000, 600, 'highway').setOrigin(0, 0);

        var inZone = false;
        this.gamerOver = false;
        this.p1Police = new Police(this, 10, 18.5,'police').setOrigin(0,0);
        this.addTruck();
        this.physics.add.overlap(this.p1Police, this.truck1, function () {
            inZone = true;
        });
        
        this.anims.create({
            key:"police_anim",
            frames: this.anims.generateFrameNumbers('p1Police'),
            framerate:20,
            repeat: -1
        });
        this.p1Police.play('police_anim');
         
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.music = this.sound.add('audio_background');

        var musicConfig = {
            mute:true,
            volume:1,
            rate:1,
            detune:0,
            seek:0,
            loop:true,
            delay: 0

        }
        this.music.play(musicConfig);
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
        let truck = new Truck(this, w, truckMargin + 120*laneChoose, 'truck').setOrigin(0,0);
        let truck2 = new Truck(this, w, truckMargin + 120*laneChoose2, 'truck').setOrigin(0,0);
        this.truckGroup.add(truck);
        this.truckGroup.add(truck2);
        
    }
    update() {
        if(!this.gameOver) {
            this.highway.tilePositionX += game.settings.startSpeed;
            this.p1Police.update();
            
            count++;
            if (count % 10 == 0 && game.settings.startSpeed < 50) {
                game.settings.startSpeed += 0.05;
                game.settings.carSpeed += 1;
            }
            //this.physics.add.overlap(this.p1Police,this.truckGroup,this.crash,null,this);
        }

        let trucks = this.truckGroup.getChildren();
        //console.log(this.truckGroup.getChildren());
        console.log(this.truckGroup.getChildren([0]));
        if (this.spawn2 && this.truck1.x < w/2) {
            this.spawn2 = false;
            this.addTruck();
        }

    }
    crash() {
        this.gameOver = true;
        
        this.truckGroup.runChildUpdate = false;
    }
    
}