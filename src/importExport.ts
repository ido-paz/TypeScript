import {makePitza,makeEgg,makeSalad,makeTost} from './export.js';
export function makeDinner(){
    console.log('started making dinner:')
    makePitza();
    makeEgg();
    makeSalad();
    makeTost();
}