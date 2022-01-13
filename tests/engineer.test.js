const Engineer= require('../src/Engineer');

test("should set Github username?",()=>{
    const githubUser = "gitHubUser123";
    const testGitHub = new Engineer("Matt","01","matt@gmail.com",githubUser);
    expect(testGitHub.github).toBe(githubUser);
});

test("should return Engineer from GetRole()", ()=>{
    const role = "Engineer";
    const testRole = new Engineer("Matt","01","matt@gmail.com","gitHubUser123");
    expect(testRole.getRole()).toBe(role);
})