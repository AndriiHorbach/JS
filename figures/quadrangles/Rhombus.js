import { Rectangle } from './Rectangle';

export class Rhombus extends Rectangle {
  constructor(points) {
    super(points)
  }
  
  welcome() {
    console.log('This is rhombus');
  }
}
