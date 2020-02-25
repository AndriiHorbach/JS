import { Point } from './Point.js';
import { FigureFactory } from './factories/FigureFactory.js';
import { Figure } from './figures/Figure.js';

let point1 = new Point(1, 2, 'A');
let point2 = new Point(3, 4, 'B');
let point3 = new Point(5, 6, 'C');
let points = [point1, point2, point3];

let figure =  FigureFactory.createFigure(points);
figure.welcome();
console.log(figure instanceof Figure);
figure.perimeter();


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

// const personProxy = new Proxy ( person, {
//     get(target, property) {
//         console.log('inside get');
//         if (property in target) 
//             return target[property];
//          else
//             throw new Error(`No ${property} field in target`)
//     },
//     set(target, property, value) {
//         if ( !(Number.isInteger(value) && value > 0))
//             throw new Error(`cannot set ${property} as such number`)
//         else if (value === false)
//             throw new Error (`cannot set ${property} as false`)
//         else if (value === '')
//             throw new Error (`cannot set ${property} as empty string`)
//         else if (isPalindrome(value))
//             throw new Error (`cannot set ${property} as palyndrome`)
//         else
//             target[property] = value;
//     },
//     has(target, property) {
//         return ['name', 'job'].includes(property)
//     }
// })
// console.log(personProxy.qqqq = 1.5);
