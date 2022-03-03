import { ShapeFactoryProducer } from './FactoryProducer'
import { ShapeType } from './Shape'

const shapeFactory = ShapeFactoryProducer.getShapeFactory(false)
const rectangle = shapeFactory.getShape(ShapeType.RECTANGLE)
rectangle?.draw()

const shapeFactory2 = ShapeFactoryProducer.getShapeFactory(true)
const roundedSquare = shapeFactory2.getShape(ShapeType.ROUNDED_SQUARE)
roundedSquare?.draw()
