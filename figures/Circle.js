import  { Figure }  from './Figure.js';

export class Circle extends Figure {
  constructor(point, radius) {
    super(point);
    this.radius = radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  
  square() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  welcome() {
    console.log('this is circle');
  }
}
