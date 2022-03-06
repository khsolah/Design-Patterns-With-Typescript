import { Address } from './Address'

export class Department {
  constructor(public name: string, public address: Address) {}

  static readonly Marketing = Object.freeze(
    new Department('Marketing', new Address(123, '100 London Road', 'London'))
  )
  static readonly Sales = Object.freeze(
    new Department('Sales', new Address(123, '100 London Road', 'London'))
  )
  static readonly Finance = Object.freeze(
    new Department('Finance', new Address(321, '101 London Road', 'London'))
  )

  clone(): Department {
    return new Department(this.name, this.address.clone())
  }
}
