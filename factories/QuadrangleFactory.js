import { Square } from '../figures/quadrangles/Square.js';
import { Rhombus } from '../figures/quadrangles/Rhombus.js';
import { Trapezium } from '../figures/quadrangles/Trapezium.js';
import { Rectangle } from '../figures/quadrangles/Rectangle.js';
import { Quadrangle } from '../figures/quadrangles/Quadrangle.js';
import { sideLength } from '../sideLength.js';

export class QuadrangleFactory {
     static createQuadrangle(points) {
        
        let a = sideLength(points[0], points[1]);
        let b = sideLength(points[1], points[2]);
        let c = sideLength(points[2], points[3]);
        let d = sideLength(points[3], points[0]);
        
        let koef = (point1, point2) => 
            ((point1.y - point2.y)/(point1.x - point2.x))

        let isTrapezium = (points) =>
            (
              (Math.abs(koef(points[1], points[2]) - koef(points[0], points[3]))) < 0.0000000001 || (Math.abs(koef(points[0], points[1]) - koef(points[3], points[2]))) < 0.0000000001
            )
		
        if ( a===b && b ===c && c===d && d===a)
            return new Square(points);
        else if (a + c === b + d)
            return new Rhombus(points);
        else if (a*a + b*b === b*b + c*c)
            return new Rectangle(points);
		else if (isTrapezium)
            return new Trapezium(points);
        else
            return new Quadrangle(points);
    }
}