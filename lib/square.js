const Shapes = require('./shapes.js')

class Square extends Shapes {
    
    render(){
        return `<rect  width="175" height="175" x="75" y="20" style="fill:${this.color}"/>`
    }
}


module.exports = Square