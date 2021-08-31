import Phaser from "phaser";
import { playerCreate, playerUpdate , playerMouseUpdate ,  playerFollowClickUpdate} from "../entity/player";
import { allCharacterImageNames } from "../entity/player/image";
import { playerCreateAnimations } from "../entity/player/animation";
import { mapCreate, mapCreateOverCharacterLayer } from "../entity/map";
import {
  mapOnPointerDown,
  mapUpdateMousePoint,
} from "../entity/map/interaction";
import { playerOnMapCreate, playerOnMapUpdate } from "../relation/playerOnMap";

function backgroundStatic(scene) {
  scene.add.sprite(800 / 2, 608 / 2, "secondFloor-background");
}

class SecondFloorScene extends Phaser.Scene {
  constructor() {
    super('SecondFloorScene');
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.playerOnMap = null;
    this.x = 16 * 6;
    this.y = 16 * 11;
    this.destinationX = this.x;
    this.destinationY = this.y;
    this.socket = window.socket;
    this.players = {};

    this.socket.on('removePlayer', (data) => {
      // this.players[data.id].player.phaser.destroy(true);
      // delete this.players[data.id];
      if (this.players[data.id]) {
        this.players[data.id].player.phaser.destroy(true);
        delete this.players[data.id];
      }
    });

    this.socket.on('playerList', (data) => {
      for (const [id, player] of Object.entries(data)) {
        if (player.floor !== '2F') return;
        if (!this.players[id]) {
          this.players[id] = player;
          this.players[id].player = playerCreate(this, player.x, player.y, player.name, player.chat, player.id);
        } else {
          // if (player.floor === 'entrance' && this.socket.id !== id) {
          if (this.socket.id !== id) {
            this.players[id].player.phaser.x = player.x;
            this.players[id].player.phaser.y = player.y;
            this.players[id].player.nameLabel.x = player.x;
            this.players[id].player.nameLabel.y = player.y - 30;
            this.players[id].player.chatBubble.x = player.x;
            this.players[id].player.chatBubble.y = player.y - 45;
            // this.players[id].player.phaser.anims.play(`player-${player.direction}`, true);
            // this.players[id].player.phaser.anims.play(`player-${player.direction}-stop`, true);
            this.players[id].player.phaser.setTexture(`${player.id}-${player.direction}-${2}`);
          }
        }
      }
    });

    this.socket.on('addChat', (data) => {
      if (this.players[data.id]) this.players[data.id].chatBubble.setText(data.chat);
    });

    this.socket.on('removeChat', (data) => {
      if (this.players[data.id]) this.players[data.id].chatBubble.setText('');
    });
  }

  init(data) {
    if (data.x) this.x = data.x;
    if (data.y) this.y = data.y;
  }

  preload() {
    this.load.image("secondFloor-background", "/img/2f_background.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.image("popup", "/img/ui-map/popup.png");
    this.load.tilemapTiledJSON({
      key: "secondFloor-map",
      url: "/tilemap/second-floor.json",
    });
    for (const [key, file] of allCharacterImageNames(window.playerImgUrl)) {
      this.load.image(key, file);
    }
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = mapCreate(this, 'secondFloor-map');
    this.player = playerCreate(this, this.x, this.y);
    this.players[this.socket.id] = this.player;

    this.socket.emit('addPlayer', {
      id: this.socket.id,
      name: window.playerName,
      imgUrl: window.playerImgUrl,
      floor: '2F',
      x: this.x,
      y: this.y,
    });

    this.playerOnMap = playerOnMapCreate();
    this.physics.add.collider(this.player.phaser, this.map.collisionLayer);
    this.physics.add.collider(this.player.nameLabel, this.map.collisionLayer);
    this.physics.add.collider(this.player.chatBubble, this.map.collisionLayer);

    this.map = mapCreateOverCharacterLayer(this.map, 'secondFloor-background');

    this.cameras.main.setBounds(
      0,
      0,
      this.map.phaser.widthInPixels,
      this.map.phaser.heightInPixels
    );
    this.cameras.main.startFollow(this.player.phaser, true, 0.1, 0.1);
    this.cameras.main.fadeIn(500);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", () => {
      if (this.cheat === true) {
        this.cheat = false;
      } else {
        this.cheat = true;
      }
    });

    this.input.on("pointerdown", (pointer) =>
      mapOnPointerDown(this.map, pointer)
    );
  }

  update(_time, _delta) {
    // const pointer = this.input.activePointer;
    // if(pointer.isDown){
    //   this.player = playerMouseUpdate(this.player,this.input.activePointer, this);
    //   mapUpdateMousePoint(this.map, this);
    //   this.playerOnMap = playerOnMapUpdate(
    //     this.playerOnMap,
    //     this.player,
    //     this.map,
    //     this
    //   );
    // }else{
    //   this.player = playerUpdate(this.player,this.cursors, this);
    //   mapUpdateMousePoint(this.map, this);
    //   this.playerOnMap = playerOnMapUpdate(
    //     this.playerOnMap,
    //     this.player,
    //     this.map,
    //     this
    //   );
    // }

    const pointer = this.input.activePointer;
    this.player = playerFollowClickUpdate(this.player, this.destinationX, this.destinationY, this);
    mapUpdateMousePoint(this.map, this);
    this.playerOnMap = playerOnMapUpdate(
      this.playerOnMap,
      this.player,
      this.map,
      this
    );

    if(pointer.isDown){
      this.destinationX = this.input.activePointer.worldX;
      this.destinationY = this.input.activePointer.worldY;

    }

    this.socket.emit('movePlayer', {
      id: this.socket.id,
      floor: '2F',
      direction: this.player.prevMove,
      x: this.player.phaser.x,
      y: this.player.phaser.y,
    });

    // this.map = mapCreateOverCharacterLayer(this.map, 'entrance-background');
  }
}

export default SecondFloorScene;
