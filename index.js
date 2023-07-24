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