const Manager = require('../lib/Manager');

describe("Manager", () => {
    it("should generate a new Manager object with name", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        const name1 = obj.name;
        expect(name1).toEqual('Jenny');
    })
        
    it("should generate a new Manager object with id", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        const id1 = obj.id;
        expect(id1).toEqual('1');
    })

    it("should generate a new Manager object with email", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        const email = obj.email;
        expect(email).toEqual('Jenny@someaddress.com');
    })

    it("should return the name of this Manager when called when called getName()", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getName()).toEqual('Jenny');
    })

    it("should return the ID of this Manager when called when called getId()", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getId()).toEqual('1');
    })
    
    it("should return the email of this Manager when called getEmail()", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getEmail()).toEqual('Jenny@someaddress.com');
    })

    it("should return the role of this Manager when called when called getRole()", () => {
        const obj = new Manager('Jenny', '1', 'Jenny@someaddress.com');
        expect(obj.getRole()).toEqual('Manager');
    })
})