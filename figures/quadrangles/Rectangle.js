import { Quadrangle } from './Quadrangle.js';

export class Rectangle extends Quadrangle {
  constructor(points) {
    super(points)
  }
  
  welcome() {
    console.log('this is rectangle');
  }
}