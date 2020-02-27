const inquirer = require('inquirer');

const validActionChoices = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
const isValidAction = (value) => validActionChoices.indexOf(value) > -1;

module.exports = {
  askForAction: () => {
    const questions = [
      {
        name: 'action',
        type: 'list',
        choices: validActionChoices,
        default: 'patch',
        message: 'Select what you desire',
        validate: function( value ) {
          if (value.length) {
            if (isValidAction(value)) {
              return true;
            } else {
              return 'Please enter a valid choice'
            }
          } else {
            return true;
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
