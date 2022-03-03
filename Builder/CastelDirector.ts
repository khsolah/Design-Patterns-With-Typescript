import { House } from './House'
import { HouseBuilder } from './HouseBuilder'

export class CastelDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Castel')
      .setDoorsAmount(100)
      .setWallMaterial('Sandstone')
      .setWindowsAmount(250)
      .getResult()
  }
}
