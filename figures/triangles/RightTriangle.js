import { Triangle } from './Triangle.js';

export class RightTriangle extends Triangle {
  constructor(points) {
    super(points);
  }

  welcome() {
    console.log('this is right triangle');
  }
}