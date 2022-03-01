export enum BreadType {
  BAGEL = 'BAGEL',
  CROISSANT = 'CROISSANT',
  DONUT = 'DONUT'
}

export abstract class Bread {
  abstract prepare(): void
  abstract bake(): void
}

export class Bagel extends Bread {
  prepare(): void {
    console.log('preparing bagel')
  }
  bake(): void {
    console.log('baking bagel')
  }
}

export class Croissant extends Bread {
  prepare(): void {
    console.log('preparing croissant')
  }
  bake(): void {
    console.log('baking croissant')
  }
}

export class Donut extends Bread {
  prepare(): void {
    console.log('preparing donut')
  }
  bake(): void {
    console.log('baking donut')
  }
}
