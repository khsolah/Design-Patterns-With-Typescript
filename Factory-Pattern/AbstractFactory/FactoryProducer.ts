import { AbstractShapeFactory } from './AbstractShapeFactory'
import { RoundedShapeFactory } from './RoundedShapeFactory'
import { ShapeFactory } from './ShapeFactory'

export class ShapeFactoryProducer {
  public static getShapeFactory(rounded: boolean): AbstractShapeFactory {
    return !rounded ? new ShapeFactory() : new RoundedShapeFactory()
  }
}
