const Intern= require('../src/Intern');

test("should set school name?",()=>{
    const school = "Newcastle Uni";
    const testSchool= new Intern("Matt","01","matt@gmail.com",school);
    expect(testSchool.school).toBe(school)
});

test("should return Intern from GetRole()", ()=>{
    const role = "Intern";
    const testRole = new Intern("Matt","01","matt@gmail.com","Newcastle Uni");
    expect(testRole.getRole()).toBe(role);
})