const Manager= require('../src/Manager');

test("should set office phone number",()=>{
    const number = "01914569876";
    const testOfficeNumber= new Manager("Matt","01","matt@gmail.com",number);
    expect(testOfficeNumber.officeNumber).toBe(number)
});

test("should return Manager from GetRole()", ()=>{
    const role = "Manager";
    const testRole = new Manager("Matt","01","matt@gmail.com","01914569876");
    expect(testRole.getRole()).toBe(role);
})