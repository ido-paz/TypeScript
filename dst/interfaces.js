//
class Player {
    //
    setModel(model) {
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
function checkUser(user) {
    console.log(user);
}
//demo's
// let youtube = new Player();
// youtube.setModel('youtube');
// youtube.play();
// checkUser({ name: "a", age: 14 });
