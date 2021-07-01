var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name) {
        this.id = id;
        this.name = name;
    }
    //
    Account.prototype.printDetails = function () {
        return { id: this.id, name: this.name };
    };
    return Account;
}());
//
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(id, name, balance) {
        var _this = _super.call(this, id, name) || this;
        _this.balance = balance;
        return _this;
    }
    //
    BankAccount.prototype.withrow = function (amount) {
        this.balance -= amount;
    };
    //
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    //
    BankAccount.prototype.printDetails = function () {
        return { id: this.id, name: this.name, balance: this.balance };
    };
    return BankAccount;
}(Account));
