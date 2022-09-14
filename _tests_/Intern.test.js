const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should generate a new Intern object with name", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        const name1 = obj.name;
        expect(name1).toEqual('Jenny');
    })
        
    it("should generate a new Intern object with id", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        const id1 = obj.id;
        expect(id1).toEqual('1');
    })

    it("should generate a new Intern object with email", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        const email = obj.email;
        expect(email).toEqual('Jenny@someaddress.com');
    })

    it("should generate a new Intern object with school", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        const school = obj.school;
        expect(school).toEqual('UCI');
    })

    it("should return the name of this Intern when called when called getName()", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        expect(obj.getName()).toEqual('Jenny');
    })

    it("should return the ID of this Intern when called when called getId()", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        expect(obj.getId()).toEqual('1');
    })
    
    it("should return the email of this Intern when called getEmail()", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        expect(obj.getEmail()).toEqual('Jenny@someaddress.com');
    })

    it("should return the school of this Intern when called getSchool()", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        expect(obj.getSchool()).toEqual('UCI');
    })


    it("should return the role of this Intern when called when called getRole()", () => {
        const obj = new Intern('Jenny', '1', 'Jenny@someaddress.com', 'UCI');
        expect(obj.getRole()).toEqual('Intern');
    })
})