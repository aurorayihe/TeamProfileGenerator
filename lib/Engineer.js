const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name1, id, email, github){
        super(name1, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
        return this.github;
    }

    getRole() {
        console.log('Engineer');
        return 'Engineer';
    }
}