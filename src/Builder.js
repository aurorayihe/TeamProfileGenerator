const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
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
            .then((answer1) => {
                newEmployee = new Engineer(answer1.name1, answer1.id, answer1.email, answer1.github);
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
            .then((answer2) => {
                newEmployee = new Intern(answer2.name1, answer2.id, answer2.email, answer2.school);
                teamInfo.push(newEmployee);
                this.checkStatus();
            })
        }
    }

    generatePage(info) {
        console.log("Generating webpage...");
        const cardArray = [];
        for (let i = 0; i < info.length; i++) {
            const employeeCard = info[i].createCard();
            cardArray.push(employeeCard);
        }
        const allInfo = cardArray.join('');
        const pageHTML = `
<!DOCTYPE html>
<html lang="en">
        
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Bootstrap Components</title>
</head>
        
<body>
    <main class="container-fluid my-3">
        
    <section class="jumbotron">
        <h1 class="display-2">My Team</h1>
    </section>
    <section class = 'row'>
    ${allInfo}
    </section>
    </main>
</body>
        
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        
</html>
        `
        fs.writeFileSync('./dist/index.html', pageHTML, err => 
        err ? console.log('Wrong!') : console.log("Created Team Page!")
        );
        this.quit();
    }

    quit(){
        console.log('See you next time!');
        process.exit(0);
    }
}

module.exports = Builder;