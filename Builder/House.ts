export class House {
  buildingType = ''
  doors = 0
  wallMaterial = ''
  windows = 0

  construction(): string {
    return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} doors and ${this.windows} windows.`
  }
}
