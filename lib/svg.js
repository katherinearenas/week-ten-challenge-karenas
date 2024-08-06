// renderText() method that should display the text in the appropiate color
// renderSvg() method to render the svg tag
// setShape() method which utilizes the shape class and 

class SVG {
    constructor() {
        this.textTag = '';
        this.shapeTag = '';
    }

    setShape(shape) {
        this.shapeTag = shape.render(); // `<polygon points="150,10 300,190 0,190" style="fill:${this.color};"/>`
    }

    // setText(text, textColor) method that should display the text in the appropiate color || `<text style="fill:${this.textColor};">${text}</text>`
    setText(text, textColor){
        this.textTag = `<text style="fill:${textColor};" x="150" y="125" font-size="60" text-anchor="middle" >${text}</text>`;
    }

    // renderSvg() method to render the svg tag || <svg>${this.shapeTag}${this.textTag}</svg>
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >${this.shapeTag}${this.textTag}</svg>`
    }
}

module.exports = SVG;