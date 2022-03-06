export class Address {
  constructor(
    public suite: number,
    public street: string,
    public city: string
  ) {}

  clone(): Address {
    return new Address(this.suite, this.street, this.city)
  }
}
