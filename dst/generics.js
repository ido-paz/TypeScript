var Collection = /** @class */ (function () {
    function Collection() {
        this.items = [];
        //
    }
    Collection.prototype.add = function (item) {
        this.items.push(item);
    };
    Collection.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            var foundItem_1 = this.items[index];
            this.items = this.items.filter(function (i) { return i != foundItem_1; });
            return foundItem_1;
        }
        return null;
    };
    //
    Collection.prototype.find = function (item) {
        return this.items.filter(function (i) { return i == item; });
    };
    //
    Collection.prototype.printAll = function () {
        this.items.forEach(function (i) {
            console.log(i);
        });
    };
    return Collection;
}());
