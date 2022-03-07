export abstract class Beverage {
  description: string = ''
  getDescription(): string {
    return this.description
  }

  abstract cost(): number
}

export class Espresso extends Beverage {
  description: string = 'Espresso'
  constructor() {
    super()
  }

  cost(): number {
    return 1
  }
}

export class HouseBlend extends Beverage {
  description: string = 'HouseBlend'
  constructor() {
    super()
  }

  cost(): number {
    return 1.25
  }
}
