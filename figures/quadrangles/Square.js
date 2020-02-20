import { Rectangle } from './Rectangle';
import { Rhombus } from './Rhombus';

export class Square extends Rhombus, Rectangle {
  constructor(points) {
    super(points)
  }
  welcome() {
    console.log('this is square');
  }
}
