const Employee = require('../src/Employee');

// is it creating instance of object?

test("Is employee creating an object?",()=>{
    const e = new Employee()
    expect(typeof(e)).toBe("object")
});

test("Can we add a new name",()=>{
    const name = "Matt"
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test("Can we add a new ID",()=>{
    const id = "01"
    const e = new Employee(id)
    expect(e.id).toBe(id)
});


test("Can we add a new email",()=>{
    const email = "matt@gmail.com"
    const e = new Employee(email)
    expect(e.email).toBe(email)
});

test("Can we select a role",()=>{
    const role = "Engineer"
    const e = new Employee(role)
    expect(e.role).toBe(role)
});