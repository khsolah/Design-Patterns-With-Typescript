import { Espresso } from './Beverage'
import { Milk, Mocha } from './BeverageDecorator'

const espresso = new Espresso()
const espressoMilk = new Milk(espresso)
const espressoMilkMocha = new Mocha(espressoMilk)

;[espresso, espressoMilk, espressoMilkMocha].forEach(beverage =>
  console.log(`${beverage.getDescription()}: $${beverage.cost()}`)
)
