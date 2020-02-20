import { Triangle } from './Triangle.js';

export class EquilateralTriangle extends Triangle {
    constructor(points) {
        super(points);
    }
    welcome() {
        console.log('this is equilateral triangle');
    }
}
