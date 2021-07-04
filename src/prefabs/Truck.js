class Truck extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.moveSpeed = game.settings.startSpeed/2;
    }

    update() {
        this.x -= game.settings.startSpeed/2;
        if(this.x <= 0 - wDivide) {
            this.reset();
        }
        
    }

    reset() {
        this.x = game.config.width + wDivide;
    }
}