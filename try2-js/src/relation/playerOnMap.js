import { log } from "../log";
import { mapTileToWorldXY } from "../entity/map";
import { popupCreate } from "../entity/popup";

export function playerOnMapCreate() {
  return {
    prevTile: null,
    prevTileName: null,
  };
}

const possibleTileNames = [
  "image1-description",
  "image1-popup",
  "image2-description",
  "image2-popup",
];

/**
 * 플레이어가 위치한 타일에 따라 특정 동작을 함
 */
export function playerOnMapUpdate(playerOnMap, player, map, scene) {
  const playerX = player.phaser.x;
  const playerY = player.phaser.y;
  const curTile = map.interactionLayer.getTileAtWorldXY(playerX, playerY);
  const curTileName = curTile?.properties?.name;
  if (playerOnMap.prevTileName !== curTileName) {
    log(curTileName);
    if (possibleTileNames.includes(curTileName)) {
      // scene을 너무 mutable하게 쓰는 거 같아서 좀 아쉬운걸.
      // 나중에 event를 남기는 걸로 바꿔보자.
      const { x, y } = mapTileToWorldXY(map, curTile);
      scene.popups.push(popupCreate(scene, { x, y }));
    }
  }

  return {
    ...playerOnMap,
    prevTile: curTile,
    prevTileName: curTile?.properties?.name,
  };
}