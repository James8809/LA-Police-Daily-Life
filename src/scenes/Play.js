class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        this.load.image('police', './assets/police.png');
        this.load.image('truck', './assets/truck.png');
        this.load.image('highway', './assets/highway.png');
    }
    create() {
        this.highway = this.add.tileSprite(0, 0, 1080, 600, 'highway').setOrigin(0, 0);
        this.p1Police = new Police(this, 10, 18.5, 'police').setOrigin(0,0);
        this.truck1 = new Truck(this, w + wEqual, 18.5, 'truck').setOrigin(0,0);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    update() {
        this.highway.tilePositionX += 4;
        this.p1Police.update();
        this.truck1.update();
    }
}