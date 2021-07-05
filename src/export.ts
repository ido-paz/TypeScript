export function makePitza() {
  log("making pitza");
}
export function makeEgg() {
  log("making egg");
}
export function makeSalad() {
  log("making salad");
}
export function makeTost() {
  log("making tost");
}
export default function makeCoffee() {
  log("making coffee");
}
//
function log(message) {
  console.log(`${new Date()} : ${message}`);
}
