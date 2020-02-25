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
    this.points[this.points.length] = this.points[0];
    for (let i = 0; i < this.points.length-1; i++) {
      perimeter+= sideLength(this.points[i], this.points[i+1])
    }
    console.log('perimeter is ' + perimeter);
  }

  square() { 
    let temp = 0;
    this.points[this.points.length] = this.points[0];
    for (let i = 0; i < this.points.length-1; i++) {
      temp+= this.points[i].x * this.points[i+1].y - this.points[i].y * this.points[i+1].x;
    }
    let square = Math.abs(temp)/2;
    console.log('square is ' + square);
  }

  welcome() {
    console.log('this is a figure');
  }
}