import { Bagel, Bread, BreadType, Croissant, Donut } from './Bread'

export class BreadFactory {
  createBread(type: BreadType): Bread {
    switch (type) {
      case BreadType.BAGEL:
        return new Bagel()
      case BreadType.CROISSANT:
        return new Croissant()
      case BreadType.DONUT:
        return new Donut()
    }
  }
}
