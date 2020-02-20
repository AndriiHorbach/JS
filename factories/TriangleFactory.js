import { RightTriangle } from '../figures/triangles/RightTriangle.js';
import { Triangle } from '../figures/triangles/Triangle.js';
import { EquilateralTriangle } from '../figures/triangles/EquilateralTriangle.js';
import { sideLength } from '../sideLength.js';

export class TriangleFactory {

    static createTriangle(points) {
        
        let a = sideLength(points[0], points[1]);
        let b = sideLength(points[1], points[2]);
        let c = sideLength(points[0], points[2]);

        if ((a == b) || (b == c) || (a == c))
            return new EquilateralTriangle(points)
        else if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (c * c + b * b == a * a))
            return new RightTriangle(points)
        else 
            return new Triangle(points);
    }
}
