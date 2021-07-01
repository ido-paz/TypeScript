var Car = /** @class */ (function () {
    function Car() {
        this.wheeles = 4;
    }
    Car.prototype.getDetails = function () {
        return { wheeles: this.wheeles, brand: this.brand };
    };
    return Car;
}());
