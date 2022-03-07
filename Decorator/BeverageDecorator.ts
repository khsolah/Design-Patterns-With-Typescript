import { Beverage } from './Beverage'

abstract class CondimentDecorator extends Beverage {
  abstract beverage: Beverage
  abstract getDescription(): string
}

export class Milk extends CondimentDecorator {
  constructor(public beverage: Beverage) {
    super()
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Milk`
  }

  cost(): number {
    return this.beverage.cost() + 0.5
  }
}

export class Mocha extends CondimentDecorator {
  constructor(public beverage: Beverage) {
    super()
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`
  }

  cost(): number {
    return this.beverage.cost() + 0.25
  }
}
