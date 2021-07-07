class Truck extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setImmovable(true);
        //this.setVelocityX(-100);
        this.moveSpeed = game.settings.startSpeed/2;
        this.spawn = true;
    }

    update() {
        this.x -= game.settings.startSpeed/2;
        console.log(this.spawn);
        if (this.spawn && this.x < w/2) {
            this.spawn = false;
            this.scene.addTruck(this.parent);
        }

        if(this.x < - this.width) {
            console.log("out");
            this.destroy();
        }
    }

    reset() {
        this.x = game.config.width + wDivide;
    }
}