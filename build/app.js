var myApp = /** @class */ (function () {
    function myApp(width, height) {
        this.game = new Phaser.Game(width, height, Phaser.AUTO, 'app', { preload: this.preload, create: this.create });
    }
    myApp.prototype.preload = function () {
        this.game.load.image('phaserImage', 'assets/sprites/phaser.png');
    };
    myApp.prototype.create = function () {
        this.phaserImage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserImage');
        this.phaserImage.anchor.setTo(0.5, 0.5);
    };
    return myApp;
}());
window.onload = function () {
    var game = new myApp(800, 600);
};
