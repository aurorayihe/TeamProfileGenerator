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

    createCard() {
      return         `
      <div class="card col-3">
        <div class="title">
          <p>${this.name}</p>
          <p>${this.getRole()}</p>
        </div>
        <div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${this.id}</li>
              <li class="list-group-item">Email:<a href="mailto: ${this.email}" class="card-link">${this.email}</a></li>
              <li class="list-group-item">School: ${this.school}</li>
          </ul>
        </div>
      </div>
        `;
    }
}

module.exports = Intern;