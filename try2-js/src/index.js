import Phaser from "phaser";
import { log } from "./log";
import { playerCreate, playerUpdate } from "./entity/player";
import { allCharacterImageNames } from "./entity/player/image";
import { playerCreateAnimations } from "./entity/player/animation";
import { mapCreate, mapCreateOverCharacterLayer } from "./entity/map";

function backgroundStatic(scene) {
  scene.add.sprite(1920 / 2, 1088 / 2, "background");
}

class CuberoomScene extends Phaser.Scene {
  constructor() {
    super();
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.prevAnim = "player-idle";
    this.prevTile = null;
  }

  preload() {
    this.load.image("background", "/img/미술관내부0216.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.tilemapTiledJSON({
      key: "map",
      url: "/tilemap/tilemap.json",
    });
    for (const [key, file] of allCharacterImageNames()) {
      this.load.image(key, file);
      log("player image load ", [key, file]);
    }
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = mapCreate(this);

    this.player = playerCreate(this);
    this.physics.add.collider(this.player.phaser, this.map.collisionLayer);

    this.map = mapCreateOverCharacterLayer(this.map);

    this.cameras.main.setBounds(
      0,
      0,
      this.map.phaser.widthInPixels,
      this.map.phaser.heightInPixels
    );
    this.cameras.main.startFollow(this.player.phaser, true, 0.1, 0.1);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", () => {
      log("Space");
      if (this.cheat === true) {
        this.cheat = false;
      } else {
        this.cheat = true;
      }
    });

    this.input.on("pointerdown", (pointer) => {
      const tile = this.map.interactionLayer.getTileAtWorldXY(
        pointer.worldX,
        pointer.worldY
      );
      if (tile == null) {
        return;
      }

      log(tile.properties.name);
      if (tile.properties.name === "image1") {
        window.open("https://google.com");
      } else if (tile.properties.name === "image2") {
        window.open("https://naver.com");
      } else if (tile.properties.name === "image3") {
        window.open("https://standlaid.github.io/portfolio/OE/M.html");
      } else if (tile.properties.name === "image4") {
        window.open("https://standlaid.github.io/portfolio/OE/SS.html");
      }
    });
  }

  update(_time, _delta) {
    this.player = playerUpdate(this.player, this.cursors, this);

    this.updateMousePointer();

    const playerX = this.player.phaser.x;
    const playerY = this.player.phaser.y;
    const curTile = this.map.interactionLayer.getTileAtWorldXY(
      playerX,
      playerY
    );
    if (this.prevTile !== curTile) {
      log(curTile);
    }
    this.prevTile = curTile;
  }

  updateMousePointer() {
    const pointer = this.input.mousePointer;
    const tile = this.map.interactionLayer.getTileAtWorldXY(
      pointer.worldX,
      pointer.worldY
    );

    if (tile == null) {
      this.input.setDefaultCursor("auto");
      return;
    }
    if (tile.properties.name === "image1") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image2") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image3") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image4") {
      this.input.setDefaultCursor("pointer");
    }
  }
}

const config = {
  type: Phaser.AUTO,
  zoom: 2,
  parent: "phaser-parent",
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,

  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [CuberoomScene],
};

const game = new Phaser.Game(config);
window.game = game;
