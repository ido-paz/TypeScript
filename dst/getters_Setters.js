var Country = /** @class */ (function () {
    function Country() {
    }
    Object.defineProperty(Country.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());
