const Triangle = require("../triangle.js");

describe ('Triangle', () => {
    describe('render()', () => {
        it('should return a triangle tag with our inputed color', () => {
            // Create a variable for the color 
            const color = 'blue';
            // Instantiate our Triangle class
            const triangle = new Triangle()
            // Utilize the setColor() method and pass our color variable
            triangle.setColor(color)
            // Create a variable for the expected output
            const expected = `<polygon points="150,10 300,190 0,190" style="fill:${color};"/>`
            // write the expect() method and expect it toBe() the expected output variable
            expect(triangle.render()).toBe(expected);

        })
    })
})
