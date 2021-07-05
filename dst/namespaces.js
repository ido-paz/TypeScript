var Validation;
(function (Validation) {
    class Number {
        static isNegative(value) {
            return value < 0;
        }
        //
        static isPositive(value) {
            return value > 0;
        }
        //
        static isNumber(value) {
            return typeof parseInt(value) === "number";
        }
        //
        static isEven(value) {
            return value % 2 === 0;
        }
        static isOdd(value) {
            return !this.isEven(value);
        }
        static isAge(age) {
            return age > -1 && age < 120;
        }
    }
    Validation.Number = Number;
    //
    function isValidEMail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    Validation.isValidEMail = isValidEMail;
})(Validation || (Validation = {}));
// console.log(Validation);
// console.log(Validation.Number.isEven(1));
// console.log(Validation.Number.isOdd(5));
// console.log(Validation.Number.isNegative(2));
// console.log(Validation.isValidEMail('idogmail.com'));
