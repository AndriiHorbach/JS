import { Rectangle } from './Rectangle.js';

export class Rhombus extends Rectangle {
  constructor(points) {
    super(points)
  }
  
  welcome() {
    console.log('This is rhombus');
  }
}
