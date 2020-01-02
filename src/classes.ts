class Person 
{
    static Count : number=0;
    UserID : number;
    Name :string;
    constructor(name : string)
    {
        Person.Count =Person.Count + 1;
        this.UserID = Person.Count;
        this.Name = name;
    }

    GetDetails()
    {
        return this.UserID + ' , ' +  this.Name;
    }
}
//
class Employee extends Person
{
    Salary : Number;
    constructor(name: string, salary :Number)
    {
        super(name);
        this.Salary = salary;
    }
    //
    GetDetails() :string
    {
        return super.GetDetails() + ',' + this.Salary;
    }
}