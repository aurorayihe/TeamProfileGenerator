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
              <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" class="card-link">${this.github}</li>
          </ul>
        </div>
      </div>
        `;
    }
}

module.exports = Engineer;