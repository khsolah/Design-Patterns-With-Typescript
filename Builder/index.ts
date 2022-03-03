import { CastelDirector } from './CastelDirector'
import { HouseBoat } from './HouseBoat'
import { IglooDirector } from './IglooDirector'

const castel = CastelDirector.construct()
const igloo = IglooDirector.construct()
const houseBoat = HouseBoat.construct()

console.log(castel.construction())
console.log(igloo.construction())
console.log(houseBoat.construction())
