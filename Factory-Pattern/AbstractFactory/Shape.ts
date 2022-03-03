export interface Shape {
  draw(): void
}

export enum ShapeType {
  RECTANGLE = 'RECTANGLE',
  SQUARE = 'SQUARE',
  ROUNDED_RECTANGLE = 'ROUNDED_RECTANGLE',
  ROUNDED_SQUARE = 'ROUNDED_SQUARE'
}
