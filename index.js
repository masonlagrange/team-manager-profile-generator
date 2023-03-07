// Import required packages
const inquirer = require('inquirer')
const fs = require('fs')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')

const team = []

// Manager information prompt
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
    ])
}

// Engineer prompt
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github',
        },
    ])
}

// Intern prompt
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'school',
        },
    ])
}

// Add another member prompt
function promptAddTeamMember() {
    return inquirer.prompt([
        {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building my team',
        ],
        },
    ])
}

async function init() {
    // Call manager prompt and add to team
    const { name, id, email, officeNumber } = await promptManager()
    const managerAdd = new manager(name, id, email, officeNumber)

    let addTeamMember = true

    // Continue adding new members while the option is not to finish
    while (addTeamMember) {
        const { choice } = await promptAddTeamMember()

        // Call engineer prompt and add to team
        if (choice === 'Add an engineer') {
            const { name, id, email, github } = await promptEngineer();
            const engineerAdd = new engineer(name, id, email, github);
            team.push(engineerAdd);

        // Call intern prompt and add to team
        } else if (choice === 'Add an intern') {
            const { name, id, email, school } = await promptIntern();
            const internAdd = new intern(name, id, email, school);
            team.push(internAdd);

        // Stop adding members
        } else if (choice === 'Finish building my team') {
            addTeamMember = false;
        }
    }

    // Send the team info to generateHTML function
    const html = generateHTML(managerAdd, team);
    
    fs.writeFile('dist/team-roster.html', html, (err) => {
        if (err) 
            {console.error(err)
        };
        console.log('Team roster HTML generated');
    });
}
init();
