import { Rhombus } from './Rhombus.js';

export class Square extends Rhombus {
  constructor(points) {
    super(points)
  }
  welcome() {
    console.log('this is square');
  }
}
