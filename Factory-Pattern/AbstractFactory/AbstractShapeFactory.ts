import { Shape, ShapeType } from './Shape'

export abstract class AbstractShapeFactory {
  abstract getShape(type: ShapeType): Shape | null
}
