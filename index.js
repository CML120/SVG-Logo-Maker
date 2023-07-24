// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square  } = require('./lib/shapes')

// Validate if the input is a valid color
function isValidColor(input) {
    const colorRegex = /^(#[0-9a-fA-F]{6}|[a-zA-Z]+)$/;
    return colorRegex.test(input);
  }
  
function questionsPrompt () {
    inquirer    
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to 3 characters:',
                validate: (input => input.length <= 3 ? true : 'Please enter up to 3 characters')
            },
        
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color:',
                validate: (input) => isValidColor(input) ? true : 'Please enter a valid color.',
              },
              {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
              },
              {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color',
                validate: (input) => isValidColor(input) ? true : 'Invalid color. Please enter a valid color',
              },
        ])
        .then(answers =>{
            const { text, textColor, shape, shapeColor } = answers;
            generateSVG(text, textColor, shape, shapeColor);  
        })
        .catch(error => console.error(error));
}


// Function to generate the SVG logo
function generateSVG(text, textColor, shape, shapeColor) {
    let svgShape;
  
    // Create the appropriate shape object based on user choice
    switch (shape.toLowerCase()) {
      case 'circle':
        svgShape = new Circle();
        break;
      case 'triangle':
        svgShape = new Triangle();
        break;
      case 'square':
        svgShape = new Square();
        break;
      default:
        console.log('Invalid shape choice.');
        return;
    }
  
    // Set the shape color
    svgShape.setColor(shapeColor);
  
    // Create the SVG markup
    const svgMarkup = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgShape.render()}
    <text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="40px" font-family="Arial, sans-serif">${text}</text>
  </svg>
  `;
  
    // Write the SVG to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgMarkup);
  
    console.log('SVG logo generated successfully!');
  }

function init() {
    console.log(`
================================================================================================================================================

                                                                                                                                        
      _/_/_/  _/      _/    _/_/_/      _/                                          _/      _/            _/                            
   _/        _/      _/  _/            _/          _/_/      _/_/_/    _/_/        _/_/  _/_/    _/_/_/  _/  _/      _/_/    _/  _/_/   
    _/_/    _/      _/  _/  _/_/      _/        _/    _/  _/    _/  _/    _/      _/  _/  _/  _/    _/  _/_/      _/_/_/_/  _/_/        
       _/    _/  _/    _/    _/      _/        _/    _/  _/    _/  _/    _/      _/      _/  _/    _/  _/  _/    _/        _/           
_/_/_/        _/        _/_/_/      _/_/_/_/    _/_/      _/_/_/    _/_/        _/      _/    _/_/_/  _/    _/    _/_/_/  _/            
                                                             _/                                                                         
                                                        _/_/

                                                  Welcome to the SVG Logo Maker App! 
                           Please enter information into the following prompts to generate your logo.
================================================================================================================================================
    `);

    questionsPrompt()

}

init();