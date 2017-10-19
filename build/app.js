var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myApp;
(function (myApp) {
    var Preloader = /** @class */ (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
        };
        Preloader.prototype.create = function () {
            this.initStates();
            this.setScale();
            this.game.state.start("Boot");
        };
        Preloader.prototype.initStates = function () {
            this.game.state.add("Boot", myApp.Boot);
            this.game.state.add("Game", myApp.Game);
        };
        Preloader.prototype.setScale = function () {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        };
        return Preloader;
    }(Phaser.State));
    myApp.Preloader = Preloader;
})(myApp || (myApp = {}));
/// <reference path="states/Preloader.ts" />
var myApp;
(function (myApp) {
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        // private phaserImage: Phaser.Sprite;
        // private game: Phaser.Game;
        function App(width, height) {
            return _super.call(this, width, height, Phaser.AUTO, 'app', State) || this;
        }
        return App;
    }(Phaser.Game));
    var State = /** @class */ (function (_super) {
        __extends(State, _super);
        function State() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        State.prototype.create = function () {
            this.game.state.add("Preloader", myApp.Preloader, true);
        };
        return State;
    }(Phaser.State));
    window.onload = function () {
        new App(1280, 720);
    };
})(myApp || (myApp = {}));
var myApp;
(function (myApp) {
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.game.load.image("logo", "/assets/sprites/phaser.png");
        };
        Boot.prototype.create = function () {
            var bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, "logo");
            bootLogo.anchor.setTo(0.5, 0.5);
        };
        return Boot;
    }(Phaser.State));
    myApp.Boot = Boot;
})(myApp || (myApp = {}));
var myApp;
(function (myApp) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Game.prototype.preload = function () {
        };
        Game.prototype.create = function () {
        };
        Game.prototype.update = function () {
        };
        return Game;
    }(Phaser.State));
    myApp.Game = Game;
})(myApp || (myApp = {}));
