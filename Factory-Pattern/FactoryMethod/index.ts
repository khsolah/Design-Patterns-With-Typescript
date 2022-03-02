import { FrenchBakery, JapanBakery } from './Bakery'
import { BreadType } from './Bread'

const jpBakery = new JapanBakery()
jpBakery.orderBread(BreadType.DONUT)

const frBakery = new FrenchBakery()
frBakery.orderBread(BreadType.CROISSANT)
