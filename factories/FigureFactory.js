import { Circle } from '../figures/Circle.js';
import { Figure } from '../figures/Figure.js';
import { TriangleFactory } from './TriangleFactory.js';
import { QuadrangleFactory } from './QuadrangleFactory.js';

export class FigureFactory {

  static createFigure(points, radius) {

    switch (points.length) {
      case 1:
        return new Circle(points, radius);
      case 3:
        return TriangleFactory.createTriangle(points);
      case 4:
        return QuadrangleFactory.createQuadrangle(points);
      case 0:
        return "oops";
      default:
        return new Figure(points);
    }
  }
}