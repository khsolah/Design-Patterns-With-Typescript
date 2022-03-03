import { AbstractShapeFactory } from './AbstractShapeFactory'
import { Rectangle } from './Rectangle'
import { ShapeType, Shape } from './Shape'
import { Square } from './Square'

export class ShapeFactory extends AbstractShapeFactory {
  getShape(type: ShapeType): Shape | null {
    switch (type) {
      case ShapeType.RECTANGLE:
        return new Rectangle()
      case ShapeType.SQUARE:
        return new Square()
      default:
        return null
    }
  }
}
