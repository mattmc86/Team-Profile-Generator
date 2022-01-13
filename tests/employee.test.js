const Employee = require('../src/Employee');

// is it creating instance of object?

test("Is employee creating an object?",()=>{
    const testEmployee = new Employee()
    expect(typeof(testEmployee)).toBe("object")
});

test("should add a new name",()=>{
    const name = "Matt"
    const testName = new Employee(name)
    expect(testName.name).toBe(name)
});

test("should add a new ID",()=>{
    const id = "01"
    const testID = new Employee("Matt",id)
    expect(testID.id).toBe(id)
});


test("should add a new email",()=>{
    const email = "matt@gmail.com"
    const testEmail = new Employee("Matt","01",email)
    expect(testEmail.email).toBe(email)
});

test("should select role ",()=>{
    const role = "Employee"
    const testRole = new Employee("Matt","01","matt@gmail.com")
    expect(testRole.getRole()).toBe(role)
});
