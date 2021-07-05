class Person {
    constructor(firstName, lastName) {
        Person.count++;
        this.id = Person.count;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //
    printDetails() {
        console.log(this.id, this.firstName, this.lastName);
    }
}
Person.count = 0;
