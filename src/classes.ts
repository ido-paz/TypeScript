class Person{
    private static count:number=0;
    readonly id:number;
    firstName:string;
    lastName:string;
    constructor(firstName: string,lastName: string){
        Person.count++;
        this.id =Person.count;
        this.firstName=firstName;
        this.lastName = lastName;
    }
    //
    printDetails(){
        console.log(this.id,this.firstName,this.lastName);
    }
}
