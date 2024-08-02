const Square = require("../square.js");

describe ('Square', () => {
    describe('render()', () => {
        it('should return a square tag with our inputed color', () => {
            // Create a variable for the color 
            const color = 'blue';
            // Instantiate our Circle class
            const square = new Square()
            // Utilize the setColor() method and pass our color variable
            square.setColor(color)
            // Create a variable for the expected output
            const expected = `<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill=${color} />`
                 // write the expect() method and expect it toBe() the expected output variable
                 expect(square.render()).toBe(expected);

                })
            })
        })






