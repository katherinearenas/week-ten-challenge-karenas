const Square = require("../square.js");

describe ('Square', () => {
    describe('render()', () => {
        it('should return a square tag with our inputed color', () => {
            // Create a variable for the color 
            const color = 'blue';
            // Instantiate our Square class
            const square = new Square()
            // Utilize the setColor() method and pass our color variable
            square.setColor(color)
            // Create a variable for the expected output
            const expected = `<rect  width="175" height="175" x="75" y="20" style="fill:${color}"/>`
                 // write the expect() method and expect it toBe() the expected output variable
                 expect(square.render()).toBe(expected);

                })
            })
        })






