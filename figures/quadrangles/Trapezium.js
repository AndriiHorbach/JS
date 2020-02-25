import { Quadrangle } from './Quadrangle.js';

export class Trapezium extends Quadrangle {
  
  constructor(points) {
    super(points)
  }

  welcome() {
    console.log('This is trapezium');
  }
}
