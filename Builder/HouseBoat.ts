import { House } from './House'
import { HouseBuilder } from './HouseBuilder'

export class HouseBoat {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('HouseBoat')
      .setDoorsAmount(6)
      .setWallMaterial('Wood')
      .setWindowsAmount(10)
      .getResult()
  }
}
