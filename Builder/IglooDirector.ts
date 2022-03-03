import { House } from './House'
import { HouseBuilder } from './HouseBuilder'

export class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setDoorsAmount(1)
      .setWallMaterial('Ice')
      .getResult()
  }
}
