class Truck extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.moveSpeed = wEqual;
    }

    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - wEqual) {
            this.reset();
        }
        
    }

    reset() {
        this.x = game.config.width + wEqual;
    }
}