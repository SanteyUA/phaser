module myApp {
    
    export class Boot extends Phaser.State {

        preload () {
            this.game.load.image("logo", "/assets/sprites/logo.png");
        }

        create () {
            let bootLogo: Phaser.Image = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "logo");
            bootLogo.anchor.setTo(0.5, 0.5);
        }

    }

}