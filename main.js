import { Point } from './Point.js';
import { FigureFactory } from './factories/FigureFactory.js';
import { Figure } from './figures/Figure.js';

//example for triangle
let point1 = new Point(1, 2, 'A');
let point2 = new Point(4, 12, 'B');
let point3 = new Point(10, 4, 'C');
let points = [point1, point2, point3];


let figure =  FigureFactory.createFigure(points);
figure.welcome();
console.log(figure instanceof Figure);
figure.perimeter();
figure.square();


// const person = {
//     name: 'Andrii',
//     age: 27,
//     job: 'tester',
//     beard: true
// }

// function isPalindrome(string) {
//     let reversedString = string.split('').reverse().join('');
//     return reversedString === string ? true : false;
// };

// const  boolenValidator = (target, property, value) => {
//     if (value === false)
//         throw new Error (`cannot set ${property} porperty as false on ${target}`);
// }

// const stringValidator = (target, property, value) => {
//     if (value === '')
//         throw new Error (`cannot set ${property} property as empty string on ${target}`);
//     if (isPalindrome(value))
//         throw new Error (`cannot set ${property} property as palyndrome on ${target}`);
// } 

// const  numberValidator = (target, property, value) => {
//     if (!(Number.isInteger(value) && value > 0))
//         throw new Error (`cannot set ${property} as such number on ${target}`);
// }

// const personProxy = new Proxy ( person, {
//     get(target, property) {
//         if (property in target) 
//             return target[property];
//          else
//             throw new Error(`No ${property} field in target`)
//     },
//     set(target, property, value){
//         switch (typeof value)
//             {
//                 case 'boolean':
//                     boolenValidator(target, property, value);
//                     target[property] = value;
//                     return true;
//                 case 'number':
//                     numberValidator(target, property, value);
//                     target[property] = value;
//                     return true;
//                 case 'string':
//                     stringValidator(target, property, value);
//                     target[property] = value;
//                     return true;
//                 default: 
//                     target[property] = value;
//                     return true;
//             }
//     },
//     has(target, property) {
//         return ['name', 'job'].includes(property)
//     }
// })
// personProxy.qqqq = true;
// console.log(personProxy.qqqq);
