const Shapes = require('../shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes()
    const cb = () => shape.render();
    const err = new Error('Child class must implement a render() method.')
    
    expect(cb).toThrow(err);
  });
});