const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should generate a new Employee object with each property when called", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        const name1 = obj.name;
        expect(name1).toEqual('Jenny');
    })
        
    it("should generate a new Employee object with each property when called", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        const id1 = obj.id;
        expect(id1).toEqual('1');
    })

    it("should generate a new Employee object with each property when called", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        const email = obj.email;
        expect(email).toEqual('Jenny@someaddress.com');
    })

    it("should return the name of this employee when called when called getName()", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getName()).toEqual('Jenny');
    })

    it("should return the ID of this employee when called when called getId()", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getId()).toEqual('1');
    })
    
    it("should return the email of this employee when called getEmail()", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getEmail()).toEqual('Jenny@someaddress.com');
    })

    it("should return the role of this employee when called when called getRole()", () => {
        const obj = new Employee('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getRole()).toEqual('Employee');
    })
})