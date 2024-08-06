const Shapes = require('./shapes.js')

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="75" style ="fill:${this.color}"/>`
    }
}
module.exports = Circle

