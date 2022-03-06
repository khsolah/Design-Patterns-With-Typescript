import { Department } from './Department'
import { Employee } from './Employee'

const John = new Employee('John', Department.Marketing.clone())
const Vick = new Employee('Vick', John.department.clone())
const David = new Employee('David', Department.Sales.clone())

David.department.name = 'Sales'

console.log({ John, Vick, David })
console.log(Department)
