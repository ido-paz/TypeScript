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