import { Figure } from '../Figure.js';

export class  Quadrangle extends Figure {
  constructor(points) {
    super(points)
  }
  
  welcome() {
    console.log('this is quadrangle');
  }
}