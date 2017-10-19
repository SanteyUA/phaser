/// <reference path="states/Preloader.ts" />

module myApp
{

  class App extends Phaser.Game{

    // private phaserImage: Phaser.Sprite;
    // private game: Phaser.Game;

    constructor(width: number, height: number) {
      super(width, height, Phaser.AUTO, 'app', State);
    }

  }

  class State extends Phaser.State {
    
    create() {
      this.game.state.add("Preloader", Preloader, true);
    }

  }

  window.onload = () => {
    new App(1280, 720);
  }

}