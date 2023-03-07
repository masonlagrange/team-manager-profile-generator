function generateHTML(managerAdd, team) {
    const engineers = []
    const interns = []
    for(i = 0; i < team.length; i++){
        const member = JSON.stringify(team[i])
        if(member.includes('github')) {
            engineers.push(team[i])
        } else if (member.includes('school')) {
            interns.push(team[i])
        }
    }
    const manager = managerAdd
    const managerCard = generateManagerCard(manager)
    const engineerCards = generateEngineerCards(engineers)
    const internCards = generateInternCards(interns)
  
    const cards = managerCard.concat(engineerCards, internCards)
    const html = generateFinalHTML(cards)
  
    return html
}

function generateManagerCard(manager) {
    return `
        <div class="card m-3 shadow">
            <div class="card-header bg-primary text-white">
                <h3>${manager.getName()}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `
}
  
function generateEngineerCards(engineers) {
    const cards = []
    for (i = 0; i < engineers.length; i++) {
        cards.push(`
            <div class="card m-3 shadow">
                <div class="card-header bg-primary text-white">
                    <h3>${engineers[i].getName()}</h3>
                    <h4>${engineers[i].getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li>ID: ${engineers[i].getId()}</li>
                        <li>Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></li>
                        <li>GitHub: <a href="https://github.com/${engineers[i].getGithub()}" target="_blank">${engineers[i].getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `)
    }
    return cards.join('\n')
}
  
function generateInternCards(interns) {
    const cards = []
    for (i = 0; i < interns.length; i++) {
        cards.push(`
            <div class="card m-3 shadow">
                <div class="card-header bg-primary text-white">
                    <h3>${interns[i].getName()}</h3>
                    <h4>${interns[i].getRole()}</h4>
                </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li>ID: ${interns[i].getId()}</li>
                    <li>Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></li>
                    <li>School: ${interns[i].getSchool()}</li>
                </ul>
            </div>
        </div>
        `)
    }
    return cards.join('\n')
}
  
function generateFinalHTML(cards) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Roster</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        </head>
        <body>
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
                <a class="navbar-brand mx-auto">My Team</a>
            </nav>
            <div class="container my-5">
                <div class="row">
                ${cards}
                </div>
            </div>
        </body>
        </html>
    `
}
module.exports = generateHTML;
