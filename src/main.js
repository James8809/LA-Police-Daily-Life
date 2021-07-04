let config = {
    type: Phaser.CANVAS,
    width: 1050,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    scene: [Play]
}

let game = new Phaser.Game(config);

let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN;
let wEqual = w/7;
let hEqual = h/5;