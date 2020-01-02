interface IIDentity
{
    UserID : number;
    UserName :string;
}
//
class User implements IIDentity
{
    UserID : number;
    UserName :string;
    GetDetails(){
        return this.UserID  + ',' + this.UserName;
    }
}