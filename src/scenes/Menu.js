class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
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
        this.add.text(w/2 - borderUISize, h/2 - borderUISize - borderPadding,
            "Endless Runner!", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 - borderPadding,
            "Press Enter to start the chase!", menuConfig).setOrigin(0,0);
        this.add.text(w/2 - borderUISize*2 + borderPadding/2, h/2 + borderPadding,
            "Press button H for instructions", menuConfig).setOrigin(0,0);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            this.scene.start('helpScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.scene.start('playScene');
        }
    }
}