class Account {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  //
  printDetails(): object {
    return { id: this.id, name: this.name };
  }
}
//
class BankAccount extends Account {
  balance: number;
  constructor(id: number, name: string, balance: number) {
    super(id, name);
    this.balance = balance;
  }
  //
  withrow(amount:number):void{
    this.balance -= amount;
  }
  //
  deposit(amount:number):void{
    this.balance += amount;
  }
  //
  printDetails(): object {
    return { id: this.id, name: this.name, balance: this.balance };
  }
}
