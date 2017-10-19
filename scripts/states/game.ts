module myApp {
    
    export class Game extends Phaser.State {

        bmdSprite: Phaser.Sprite;

        preload () {

        }

        create () {
            // SOME TESTS
            
            // let bmd = this.game.add.bitmapData(200, 200);

            // bmd.context.beginPath();
            // bmd.context.fillStyle = "#FFFF00";
            // bmd.context.strokeStyle = "#0000FF";
            // bmd.context.lineWidth = 35;
            // bmd.context.arc(bmd.width / 2, bmd.height / 2, 75, 0, Math.PI*2);
            // bmd.context.closePath();
            // bmd.context.fill();
            // bmd.context.stroke();

            // this.bmdSprite = this.game.add.sprite(this.game.width - 100, this.game.height / 2, bmd);
            // this.bmdSprite.anchor.setTo(0.5);
            
            // let alphaTween = this.game.add.tween(this.bmdSprite);
            // alphaTween.to({ x: 100 }, 1000, Phaser.Easing.Bounce.Out, true, 1000, 1, true);
            // alphaTween.start();
        }

        update () {

        }

    }

}