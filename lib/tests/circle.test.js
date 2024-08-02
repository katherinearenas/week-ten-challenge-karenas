const Circle= require("../circle.js");

describe ('Circle', () => {
    describe('render()', () => {
        it('should return a circle tag with our inputed color', () => {
            // Create a variable for the color 
            const color = 'blue';
            // Instantiate our Circle class
            const circle = new Circle()
            // Utilize the setColor() method and pass our color variable
            circle.setColor(color)
            // Create a variable for the expected output
            const expected = `<circle cx="25" cy="75" r="20" fill=${color}/>`
                 // write the expect() method and expect it toBe() the expected output variable
                 expect(circle.render()).toBe(expected);

                })
            })
        })