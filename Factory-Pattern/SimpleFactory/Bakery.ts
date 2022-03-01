import { BreadType } from './Bread'
import { BreadFactory } from './BreadFactory'

export class Bakery {
  constructor(private factory: BreadFactory = new BreadFactory()) {}

  produce(type: BreadType) {
    let bread = this.factory.createBread(type)
    bread.prepare()
    bread.bake()
    return bread
  }
}
