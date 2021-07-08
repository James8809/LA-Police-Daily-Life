class Ending extends Phaser.Scene{
    constructor() {
        super("endingScene");
    }
    
    init() {

    }
    preload() {
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
            "Unfortunately you have crashed....", menuConfig).setOrigin(0.5,0);
        let text3 = this.add.text(w/2, h/2 + borderPadding,
            "The good thing is the thief only stoled a bread!", menuConfig).setOrigin(0.5,0);
        let text4 = this.add.text(w/2, h/2 + borderPadding*3,
            ".......what? ", menuConfig).setOrigin(0.5,0);
            
        let text5 = this.add.text(borderPadding, borderPadding/2,
            "Press Enter to start your horrible life again....", menuConfig).setOrigin(0,0);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('horn');
            this.scene.start('menuScene');
        }
    }
}