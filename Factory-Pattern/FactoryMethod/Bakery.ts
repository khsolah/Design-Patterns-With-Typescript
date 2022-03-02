import {
  Bread,
  BreadType,
  FrenchStyleBagel,
  FrenchStyleCroissant,
  FrenchStyleDonut,
  JapanStyleBagel,
  JapanStyleCroissant,
  JapanStyleDonut
} from './Bread'

export abstract class Bakery {
  protected abstract createBread(type: BreadType): Bread
  public orderBread(type: BreadType): Bread {
    const bread: Bread = this.createBread(type)
    bread.prepare()
    bread.bake()
    return bread
  }
}

export class JapanBakery extends Bakery {
  protected createBread(type: BreadType): Bread {
    switch (type) {
      case BreadType.BAGEL:
        return new JapanStyleBagel()
      case BreadType.CROISSANT:
        return new JapanStyleCroissant()
      case BreadType.DONUT:
        return new JapanStyleDonut()
    }
  }
}

export class FrenchBakery extends Bakery {
  protected createBread(type: BreadType): Bread {
    switch (type) {
      case BreadType.BAGEL:
        return new FrenchStyleBagel()
      case BreadType.CROISSANT:
        return new FrenchStyleCroissant()
      case BreadType.DONUT:
        return new FrenchStyleDonut()
    }
  }
}
