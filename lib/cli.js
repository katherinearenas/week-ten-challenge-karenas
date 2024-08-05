const inquirer = require('inquirer');
const writeFile = require('fs/promises');
const Triangle = require('./triangle');
const SVG = require('./svg');
const fs = require('fs');

class CLI {
  constructor() {
    this.logo = '';
  }
  createLogo(fileName, fileContent) {
    fs.writeFile(fileName, fileContent, (err) => err ? console.log(err) : console.log('Logo successfully created!'));
  }
  run() {
    const questions = [
      {
        type: 'list',
        name: 'shapeChoice',
        message: 'Select a shape:',
        choices: ['Circle', 'Square', 'Triangle']
      },
      {
        type: 'input',
        name: 'logoText',
        message: 'Enter logo text (must be 3 characters or less):',
      },
     {
      type: 'input',
      name: 'textColor',
      message: 'Enter logo text color:',
    },
    {
      type: 'input',
      name: 'logoColor',
      message: 'Enter logo color:',
    }
  ];

    return inquirer
      .prompt(questions)
      .then(responses => {
        const { logoText, textColor, logoColor, shapeChoice} = responses;
        let shape;
        if (shapeChoice === 'Triangle') {
          shape = new Triangle();
        }
        shape.setColor(logoColor);
        const logo = new SVG();
        logo.setShape(shape);
        logo.setText(logoText, textColor);
        this.createLogo('./examples/logo.svg', logo.renderSvg());
      });
  }
}

module.exports = CLI;
