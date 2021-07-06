class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.spritesheet('car driving', './assets/car sprite.png', {frameWidth: 600, frameHeight: 400, startFrame: 0, endFrame: 12} );

    }
    create() {
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '35px',
            backgroundColor: '#FDFFD5',
            stroke: '8178B9',
            strokeThickness: 2,
            color:'#C18468',
            padding: {
                top: 5,
                bottom: 5,
            },
        }

        // setting up a camera cause I want to change the background color
        var camera = this.cameras.main;        
        this.cameras.main.setBackgroundColor('#FA9A75');
        
        // menu text
        this.add.text(w/2 - borderUISize, h/2 - borderUISize,
            "ENDLESS RUNNER", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 - borderPadding,
            "Press Enter to start the chase!", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 + borderPadding,
            "Press button H for Help!", menuConfig).setOrigin(0,0);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.anims.create({
            key: 'driving', 
            frames: this.anims.generateFrameNumbers('car driving',{start:0, end: 12, first: 0}), 
            frameRate:30,
            repeat: -1})
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            this.scene.start('helpScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.scene.start('playScene');
            game.settings = {
                startSpeed: 10,
            }
        }
        this.add.sprite(w/2 - borderUISize*2 + borderPadding/2, h/2 + borderPadding *4 ,'car driving').play('driving');
    }
}