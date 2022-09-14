const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("should generate a new Engineer object with name", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        const name1 = obj.name;
        expect(name1).toEqual('Jenny');
    })
        
    it("should generate a new Engineer object with id", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        const id1 = obj.id;
        expect(id1).toEqual('1');
    })

    it("should generate a new Engineer object with email", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        const email = obj.email;
        expect(email).toEqual('Jenny@someaddress.com');
    })

    it("should generate a new Engineer object with github", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        const github = obj.github;
        expect(github).toEqual('mygithub');
    })

    it("should return the name of this Engineer when called when called getName()", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        expect(obj.getName()).toEqual('Jenny');
    })

    it("should return the ID of this Engineer when called when called getId()", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        expect(obj.getId()).toEqual('1');
    })
    
    it("should return the email of this Engineer when called getEmail()", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        expect(obj.getEmail()).toEqual('Jenny@someaddress.com');
    })

    it("should return the github username of this Engineer when called getGithub()", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        expect(obj.getGithub()).toEqual('mygithub');
    })

    it("should return the role of this Engineer when called when called getRole()", () => {
        const obj = new Engineer('Jenny', '1', 'Jenny@someaddress.com', 'mygithub');
        expect(obj.getRole()).toEqual('Engineer');
    })
})