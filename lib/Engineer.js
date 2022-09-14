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
        const myCard = 
        `
        <div class="card ">
          <div class="card-body">
            <h2 class="card-title">${this.name}</h2>
            <p class="card-text">${this.position}</p>
          </div>
          <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${this.name}</li>
                <li class="list-group-item">Email: <a href="mailto: ${this.email}" class="card-link">${this.email}</a></li>
                <li class="list-group-item">GitHub: </li>
            </ul>
          </div>
        </div>
        `
    }
}

module.exports = Engineer;