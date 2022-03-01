import { Bakery } from './Bakery'
import { BreadType } from './Bread'

const bakery = new Bakery()

bakery.produce(BreadType.BAGEL)
bakery.produce(BreadType.CROISSANT)
bakery.produce(BreadType.DONUT)
