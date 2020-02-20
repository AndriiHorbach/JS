import { Figure } from '../Figure.js';

export class Triangle extends Figure {
  constructor(points) {
    super(points)
  }

  welcome() {
    console.log('this is triangle');
  }
}