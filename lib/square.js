const Shapes = require('./shapes.js')

class Square extends Shapes {
    render(){
        return `<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill=${this.color} />`
    }
}


module.exports = Square