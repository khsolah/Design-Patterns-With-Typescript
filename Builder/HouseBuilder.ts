import { House } from './House'

interface IHouseBuilder {
  house: House
  getResult(): House
  reset(): void
  setBuildingType(buildingType: string): this
  setDoorsAmount(doorsAmount: number): this
  setWallMaterial(wallMaterial: string): this
  setWindowsAmount(windowsAmount: number): this
}

export class HouseBuilder implements IHouseBuilder {
  house: House

  constructor() {
    this.house = new House()
  }

  getResult(): House {
    return this.house
  }

  reset(): void {
    this.house = new House()
  }

  setBuildingType(buildingType: string): this {
    this.house.buildingType = buildingType
    return this
  }

  setDoorsAmount(doorsAmount: number): this {
    this.house.doors = doorsAmount
    return this
  }

  setWallMaterial(wallMaterial: string): this {
    this.house.wallMaterial = wallMaterial
    return this
  }

  setWindowsAmount(windowsAmount: number): this {
    this.house.windows = windowsAmount
    return this
  }
}
