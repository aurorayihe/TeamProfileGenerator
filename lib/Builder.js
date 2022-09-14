const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');

const teamInfo = [];

class Builder {
    constructor() {
        this.isStop = false;
    }

    buildTeam() {
        inquirer
            .prompt([
                {
                    type:'input',
                    name: 'nameM',
                    message: 'Enter the name of your team manager',
                },
                {
                    type:'input',
                    name: 'idM',
                    message: 'Enter the id of your team manager',
                },
                {
                    type:'input',
                    name: 'emailM',
                    message: 'Enter the email of your team manager',
                },
                {
                    type:'input',
                    name: 'officeNumber',
                    message: 'Enter the office number',
                },
            ])
            .then((answer) => {
                const manager = new Manager(answer.nameM, answer.idM, answer.emailM, answer.officeNumber);
                teamInfo.push(manager);
                this.checkStatus();

            })
    }
    // Check if user would like to continue
    checkStatus() {
        inquirer
            .prompt([
                {
                    type:'list',
                    name: 'checkStatus',
                    message: 'Would you like to add a new employee?',
                    choices: ['Yes', 'No'],
                }
            ])
            .then(answer => {
                if(answer.checkStatus === 'Yes') {
                    this.addEmployee();
                } else if (answer.checkStatus === 'No') {
                    this.generatePage(teamInfo);
                    this.quit();
                }
            })
    }

    addEmployee(){
        inquirer
            .prompt([
                {
                    type:'list',
                    name: 'checkType',
                    message: 'What employee would you like to add?',
                    choices: ['Engineer', "Intern"],
                }
            ])
            .then(answer => {
                this.constructEmployee(answer.checkType);
            })
    }

    constructEmployee(answer){
        console.log(answer);
        let newEmployee;

        if (answer === 'Engineer') {
            inquirer
            .prompt([
                {
                    type:'input',
                    name: 'name1',
                    message: 'Enter the name of your new engineer',
                },
                {
                    type:'input',
                    name: 'id',
                    message: 'Enter the id of your new engineer',
                },
                {
                    type:'input',
                    name: 'email',
                    message: 'Enter the email of your new engineer',
                },
                {
                    type:'input',
                    name: 'github',
                    message: 'Enter the github username of your new engineer',
                },
            ])
            .then((answer) => {
                newEmployee = new Engineer(answer.name1, answer.id, answer.email, answer.github);
                teamInfo.push(newEmployee);
                this.checkStatus();
            })
        } else if (answer === 'Intern') {
            inquirer
            .prompt([
                {
                    type:'input',
                    name: 'name1',
                    message: 'Enter the name of your new intern',
                },
                {
                    type:'input',
                    name: 'id',
                    message: 'Enter the id of your new Intern',
                },
                {
                    type:'input',
                    name: 'email',
                    message: 'Enter the email of your new Intern',
                },
                {
                    type:'input',
                    name: 'school',
                    message: 'Enter the school of your new Intern',
                },
            ])
            .then((answer) => {
                newEmployee = new Intern(answer.name1, answer.id, answer.email, answer.school);
                teamInfo.push(newEmployee);
                this.checkStatus();
            })
        }
    }

    generatePage(info) {
        console.log(info);
        
        return;
    }

    quit(){
        console.log('See you next time!');
        process.exit(0);
    }
}

module.exports = Builder;