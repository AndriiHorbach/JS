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
		let d = sideLength(points[0], points[3]);

		let isTrapezium = (points) => ((points[1].y - points[0].y)/(points[1].x - points[0].x) === (points[3].y - points[2].y)/(points[3].x - points[2].x)
		|| (points[3].y - points[1].y)/(points[4].x - points[1].x) === (points[2].y - points[1].y)/(points[2].x - points[1].x))
		
        if (a===b===c===d)
            return new Square(points);
        else if (a + c === b + d)
            return new Rhombus(points);
		else if (isTrapezium)
            return new Trapezium(points);
        else if (a*a + b*b === b*b + c*c)
            return new Rectangle(points);
        else
            return new Quadrangle(points);
    }
}