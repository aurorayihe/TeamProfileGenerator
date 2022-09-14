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

    createCard() {
        return         `
      <div class="card col-3">
        <div class="title">
          <p>${this.name}</p>
          <p>${this.getRole()}</p>
        </div>
        <div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${this.email}" class="card-link">${this.email}</a></li>
              <li class="list-group-item">Office Number: ${this.officeNumber}</li>
          </ul>
        </div>
      </div>
        `;
    }
}

module.exports = Manager