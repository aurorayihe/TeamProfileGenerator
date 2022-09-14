const { default: inquirer } = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name1, id, email, officeNumber) {
        super(name1, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log('Manager');
        return 'Manager';
    }
}

module.exports = Manager;