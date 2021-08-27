/* eslint-disable import/prefer-default-export */

import { log } from "../../log";
import { animationFrames } from "./image";

const directions = ["down", "up", "left", "right"];

export function playerCreateAnimations(scene) {
  for (const direction of directions) {
    const animConfig = {
      key: `player-${direction}`,
      frames: [...animationFrames(direction)],
      frameRate: 10,
      repeat: -1,
    };
    scene.anims.create(animConfig);
    log(animConfig);
    log([...animationFrames(direction)]);
  }

  for (const direction of directions) {
    scene.anims.create({
      key: `player-${direction}-stop`,
      frames: [
        {
          key: `player-${direction}-2`,
        },
      ],
      frameRate: 10,
      repeat: -1,
    });
  }
}

export function updateAnimation(player, cursors) {
  let newPrevAnim = player.prevAnim;

  if (typeof cursors === 'string' || typeof cursors === 'undefined') {
    if (cursors === 'left') {
      if (player.prevAnim !== "player-left") {
        player.phaser.anims.play("player-left", true);
        newPrevAnim = "player-left";
      }
    } else if (cursors === 'right') {
      if (player.prevAnim !== "player-right") {
        player.phaser.anims.play("player-right", true);
        newPrevAnim = "player-right";
      }
    } else if (cursors === 'up') {
      if (player.prevAnim !== "player-up") {
        player.phaser.anims.play("player-up", true);
        newPrevAnim = "player-up";
      }
    } else if (cursors === 'down') {
      if (player.prevAnim !== "player-down") {
        player.phaser.anims.play("player-down", true);
        newPrevAnim = "player-down";
      }
    } else {
      if (player.prevAnim === "player-up") {
        player.phaser.anims.play("player-up-stop", true);
      } else if (player.prevAnim === "player-down") {
        player.phaser.anims.play("player-down-stop", true);
      } else if (player.prevAnim === "player-left") {
        player.phaser.anims.play("player-left-stop", true);
      } else if (player.prevAnim === "player-right") {
        player.phaser.anims.play("player-right-stop", true);
      } else {
        player.phaser.anims.stop();
      }
    }

    return {
      ...player,
      prevAnim: newPrevAnim,
    };
  }

  if (cursors.left.isDown) {
    if (player.prevAnim !== "player-left") {
      player.phaser.anims.play("player-left", true);
      newPrevAnim = "player-left";
    }
  } else if (cursors.right.isDown ) {
    if (player.prevAnim !== "player-right") {
      player.phaser.anims.play("player-right", true);
      newPrevAnim = "player-right";
    }
  } else if (cursors.up.isDown ) {
    if (player.prevAnim !== "player-up") {
      player.phaser.anims.play("player-up", true);
      newPrevAnim = "player-up";
    }
  } else if (cursors.down.isDown ) {
    if (player.prevAnim !== "player-down") {
      player.phaser.anims.play("player-down", true);
      newPrevAnim = "player-down";
    }
  } else {
    if (player.prevAnim === "player-up") {
      player.phaser.anims.play("player-up-stop", true);
    } else if (player.prevAnim === "player-down") {
      player.phaser.anims.play("player-down-stop", true);
    } else if (player.prevAnim === "player-left") {
      player.phaser.anims.play("player-left-stop", true);
    } else if (player.prevAnim === "player-right") {
      player.phaser.anims.play("player-right-stop", true);
    } else {
      player.phaser.anims.stop();
    }

    newPrevAnim = "player-idle";
  }

  return {
    ...player,
    prevAnim: newPrevAnim,
  };
}

export function updateMouseAnimation(player, pointer) {
  let newPrevAnim = player.prevAnim;

  if (pointer.worldX < player.phaser.x ) {
    if((pointer.worldY < player.phaser.y) && (player.phaser.x - pointer.worldX <= 30)){
      player.phaser.anims.play("player-up", true);
      newPrevAnim = "player-up";
    }else if((pointer.worldY > player.phaser.y) && (player.phaser.x - pointer.worldX <= 30)){
      player.phaser.anims.play("player-down", true);
      newPrevAnim = "player-down";
    }else if(player.prevAnim !== "player-left") {
      player.phaser.anims.play("player-left", true);
      newPrevAnim = "player-left";
    }

  } else if (pointer.worldX > player.phaser.x) {
    if (player.prevAnim !== "player-right") {
      player.phaser.anims.play("player-right", true);
      newPrevAnim = "player-right";
    }
  } else if (pointer.worldY < player.phaser.y) {
    if (player.prevAnim !== "player-up") {
      player.phaser.anims.play("player-up", true);
      newPrevAnim = "player-up";
    }
  } else if (pointer.worldY > player.phaser.y) {
    if (player.prevAnim !== "player-down") {
      player.phaser.anims.play("player-down", true);
      newPrevAnim = "player-down";
    }
  } else {
    if (player.prevAnim === "player-up") {
      player.phaser.anims.play("player-up-stop", true);
    } else if (player.prevAnim === "player-down") {
      player.phaser.anims.play("player-down-stop", true);
    } else if (player.prevAnim === "player-left") {
      player.phaser.anims.play("player-left-stop", true);
    } else if (player.prevAnim === "player-right") {
      player.phaser.anims.play("player-right-stop", true);
    } else {
      player.phaser.anims.stop();
    }

    newPrevAnim = "player-idle";
  }

  return {
    ...player,
    prevAnim: newPrevAnim,
  };
}
