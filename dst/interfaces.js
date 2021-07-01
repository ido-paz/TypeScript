//
var Player = /** @class */ (function () {
    function Player() {
    }
    //
    Player.prototype.play = function () {
        console.log(this.model + " started playing");
    };
    //
    Player.prototype.stop = function () {
        console.log(this.model + " stopped playing");
    };
    return Player;
}());
