const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('renders a circle with the correct color', () => {
      const color = 'red';
      const circle = new Circle();
      circle.setColor(color);
  
      const expectedSVG = `<circle cx="150" cy="115" r="80" fill="${color}" />`;
      expect(circle.render()).toBe(expectedSVG);
    });
  });

  describe('Triangle', () => {
    test('renders a triangle with the correct color', () => {
      const color = 'blue';
      const triangle = new Triangle();
      triangle.setColor(color);
  
      const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
      expect(triangle.render()).toBe(expectedSVG);
    });
  });
  
  describe('Square', () => {
    test('renders a square with the correct color', () => {
      const color = 'green';
      const square = new Square();
      square.setColor(color);
  
      const expectedSVG = `<rect x="73" y="40" width="160" height="160" fill="${color}" />`;
      expect(square.render()).toBe(expectedSVG);
    });
  });
  