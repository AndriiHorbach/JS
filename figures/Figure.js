import { sideLength } from '../sideLength.js';

export class Figure {
  constructor(points) {
    if (this.constructor === Figure) {
      throw new TypeError('Abstract class "figure" cannot be instantiated directly.');
    }
    this.points = points;
  }

  perimeter() { 
    let perimeter = 0;
    for (let i = 0; i < this.points.length-1; ++i) {
      perimeter+= sideLength(this.points[i], this.points[i+1])
    }

    let lastSide = sideLength(this.points[0], this.points[this.points.length-1]);
    perimeter+=lastSide;
    console.log('perimeter is ' + perimeter);
  }

  square() { 
    let temp = 0;
    for (let i = 0; i< this.points.length -1; i++ ) {
      temp+= points[i].x * this.points[i+1].y - this.points[i].y * this.points[i+1].x;
    }
    
    let square = Math.abs(temp/2);
    console.log('square is ' + square);
  }

  welcome() {
    console.log('this is figure');
  }
}