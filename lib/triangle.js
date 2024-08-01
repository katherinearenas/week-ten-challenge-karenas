const Shapes = require('./shapes.js')

class Triangle extends Shapes {
    render(){
        return `<polygon points="150,10 300,190 0,190" style="fill:${this.color};"/>`
    }
}


module.exports = Triangle