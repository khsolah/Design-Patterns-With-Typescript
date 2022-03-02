export enum BreadType {
  BAGEL = 'BAGEL',
  CROISSANT = 'CROISSANT',
  DONUT = 'DONUT'
}

export abstract class Bread {
  abstract prepare(): void
  abstract bake(): void
}

export class JapanStyleBagel extends Bread {
  prepare(): void {
    console.log('preparing Japan-style bagel')
  }
  bake(): void {
    console.log('baking Japan-style bagel')
  }
}

export class JapanStyleCroissant extends Bread {
  prepare(): void {
    console.log('preparing Japan-style croissant')
  }
  bake(): void {
    console.log('baking Japan-style croissant')
  }
}

export class JapanStyleDonut extends Bread {
  prepare(): void {
    console.log('preparing Japan-style donut')
  }
  bake(): void {
    console.log('baking Japan-style donut')
  }
}

export class FrenchStyleBagel extends Bread {
  prepare(): void {
    console.log('preparing French-style bagel')
  }
  bake(): void {
    console.log('baking French-style bagel')
  }
}

export class FrenchStyleCroissant extends Bread {
  prepare(): void {
    console.log('preparing French-style croissant')
  }
  bake(): void {
    console.log('baking French-style croissant')
  }
}

export class FrenchStyleDonut extends Bread {
  prepare(): void {
    console.log('preparing French-style donut')
  }
  bake(): void {
    console.log('baking French-style donut')
  }
}
