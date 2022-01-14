const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const Manager = require("./src/Manager");

const employees = [];

function initApp() {
    renderHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Enter team member's id",
        name: "id"
    },
    {
        type: "input",
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addEmployee();
                } else {
                    completeHtml();
                }
            });
            
        });
    });
}

function renderHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark mb-3 bg-info">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
   
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-10 bg-info" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item bg-light">ID: ${id}</li>
                <li class="list-group-item bg-light">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item bg-light">GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3 bg-info" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item bg-light">ID: ${id}</li>
                <li class="list-group-item bg-light">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item bg-light">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3 bg-info" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item bg-light">ID: ${id}</li>
                <li class="list-group-item bg-light">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item bg-light">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("Generating Team Profile");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
       
    
}

function completeHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Complete");
}



initApp();

