class Help extends Phaser.Scene{
    constructor() {
        super("helpScene");
    }
    
    init() {

    }
    preload() {

    }
    create() {
        let menuConfig = {
            fontFamily: 'Atari',
            fontSize: '35px',
            backgroundColor: '#58D68D',
            color:'#000000',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0 
        }

        // setting up a camera cause I want to change the background color
        var camera = this.cameras.main;        
        this.cameras.main.setBackgroundColor('#16D4EE');

        // menu text
        this.add.text(borderPadding, borderPadding/2,
            "Press ESC button to return to start Menu", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderPadding*2 - borderPadding/2, h/2 - borderUISize*2 + borderPadding/2,
            "Instructions~", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 - borderPadding, h/2 - borderUISize,
            "Use ↑ arrow to move police car up", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 - borderPadding, h/2 -borderPadding,
            "Use ↓ arrow to move police car down", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 - borderPadding*3, h/2 + borderPadding,
            "Try to avoid truck while you are chasing thief!", menuConfig).setOrigin(0,0);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.scene.start('menuScene');
        }
    }
}