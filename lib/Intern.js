const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name1, id, email, school) {
        super(name1, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
        return this.school;
    }

    getRole() {
        console.log('Intern');
        return 'Intern';
    }
}