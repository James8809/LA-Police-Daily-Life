let config = {
    type: Phaser.CANVAS,
    width: 1050,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    
    scene: [Menu, Help, Play]
}

let game = new Phaser.Game(config);

let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyH, keyESC, keyENTER;
let wEqual = w/7;
let hEqual = h/5;
let borderUISize = w / 10;
let borderPadding = borderUISize / 3;