class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.spritesheet('car driving', './assets/car sprite.png', {
            frameWidth: 60, frameHeight: 45
        });
        this.load.audio('horn', './assets/horn.wav');
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
        let text1 = this.add.text(w/2, h/2 - borderUISize - borderPadding,
            "LA Police Daily Life", menuConfig).setOrigin(0.5,0);
        let text2 = this.add.text(w/2, h/2 - borderPadding,
            "Press Enter to start your day!", menuConfig).setOrigin(0.5,0);
        let text3 = this.add.text(w/2, h/2 + borderPadding,
            "Press button H for instructions", menuConfig).setOrigin(0.5,0);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.anims.create({
            key: 'driving', 
            frames: this.anims.generateFrameNumbers('car driving'), 
            frameRate:10,
            repeat: -1
        })
        
        //this.add.sprite(w/2, h/2 + borderPadding *4 ,'car driving').play('driving');
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            this.sound.play('horn');
            this.scene.start('helpScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('horn');
            this.scene.start('playScene');
            game.settings = {
                startSpeed: 10,
            }
        }
    }
}