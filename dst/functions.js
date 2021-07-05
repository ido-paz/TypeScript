function exists(array, value) {
    return array.some(v => {
        return v === value;
    });
}
//
function logMessage(message) {
    console.log(message);
}
//
let b = exists(['pi', 'aaaa'], "fdsfds");
