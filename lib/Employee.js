// Constructor function for the employee class
class Employee {
    constructor(name1, id, email) {
        this.name = name1;
        this.id = id;
        this.email = email;
    }
    // Get the name 
    getName() {
        console.log(this.name);
        return this.name;
    }

    // Get the id
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        console.log(this.email);
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;