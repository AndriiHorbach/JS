import  { Point }  from './Point.js';
import  { FigureFactory }  from './factories/FigureFactory.js';
import { Figure } from './figures/Figure.js';

let point1 = new Point(1, 2, 'A');
let point2 = new Point(3, 4, 'B');
let point3 = new Point(5, 6, 'C');
let points = [point1, point2, point3];

let figure =  FigureFactory.createFigure(points);
figure.welcome();
console.log(figure instanceof Figure);
figure.perimeter();