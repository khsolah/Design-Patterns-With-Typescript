import { AbstractShapeFactory } from './AbstractShapeFactory'
import { RoundedRectangle } from './roundedRectangle'
import { RoundedSquare } from './RoundedSquare'
import { ShapeType, Shape } from './Shape'

export class RoundedShapeFactory extends AbstractShapeFactory {
  getShape(type: ShapeType): Shape | null {
    switch (type) {
      case ShapeType.ROUNDED_RECTANGLE:
        return new RoundedRectangle()
      case ShapeType.ROUNDED_SQUARE:
        return new RoundedSquare()
      default:
        return null
    }
  }
}
