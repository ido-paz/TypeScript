interface IUser {
  name: string;
  age: number;
}

interface IPlayer {
  model: string;
  play: Function;
  stop():void;
  setModel(model:string):void
}
//
class Player implements IPlayer {
  model: string;
  //
  setModel(model:string):void{
      this.model = model;
  }
  //
  play() {
    console.log(`${this.model} started playing`);
  }
  //
  stop() {
    console.log(`${this.model} stopped playing`);
  }
}
//
function checkUser(user: IUser) {
  console.log(user);
}
//demo's
// let youtube = new Player();
// youtube.setModel('youtube');
// youtube.play();
// checkUser({ name: "a", age: 14 });
