class Account {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //
    printDetails() {
        return { id: this.id, name: this.name };
    }
}
//
class BankAccount extends Account {
    constructor(id, name, balance) {
        super(id, name);
        this.balance = balance;
    }
    //
    withrow(amount) {
        this.balance -= amount;
    }
    //
    deposit(amount) {
        this.balance += amount;
    }
    //
    printDetails() {
        return { id: this.id, name: this.name, balance: this.balance };
    }
}
