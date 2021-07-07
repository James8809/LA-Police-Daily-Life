class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        // trying
        this.load.image('truck', './assets/truck_copy.png');
        this.load.image('highway', './assets/Freeway.png');
        this.load.spritesheet('p1Police', './assets/spritesheet.png',{
            frameWidth:105,
            frameHeight:59
        });
        this.load.image('truck', './assets/truck_copy.png');
        this.load.image('highway', './assets/Freeway.png');
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

        this.highway = this.add.tileSprite(0, 0, 1080, 600, 'highway').setOrigin(0, 0);

        var inZone = false;
        this.gamerOver = false;
        this.p1Police = new Police(this, 10, 18.5).setOrigin(0,0);
        this.addTruck();
        this.physics.add.overlap(this.p1Police, this.truck1, function () {
            inZone = true;
        });
        
        this.physics.add.collider(this.p1Police, this.truck1, function () {
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
            mute:false,
            volume:1,
            rate:1,
            detune:0,
            seek:0,
            loop:false,
            delay: 0

        }
        this.music.play(musicConfig);
    }
    addTruck() {
        let laneChoose =  Phaser.Math.Between(0, 4);
        let truck = new Truck(this, w, truckMargin + 120*laneChoose, 'truck').setOrigin(0,0);
        this.truckGroup.add(truck);
    }
    update() {
        if(!this.gameOver) {
            this.highway.tilePositionX += game.settings.startSpeed;
            this.p1Police.update();
            
            count++;
            if (count % 10 == 0 && game.settings.startSpeed < 30) {
                game.settings.startSpeed += 1;
            }
        }
        if(this.inZone) {
            this.gamerOver = true;
            console.log("touch");

        }
        
        this.inZone = false;
    }
    
    
}