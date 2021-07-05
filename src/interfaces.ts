interface IUser{
    name:string,
    age:number
}

checkUser({name:'a',age:14});

function checkUser(user : IUser){

}

interface IPlayer{
    model:string;
    play:Function;
    stop:Function;
}
//
class Player implements IPlayer{
    model:string;
    //
    play(){
        console.log(`${this.model} started playing`);
    }
    //
    stop(){
        console.log(`${this.model} stopped playing`);
    }
}