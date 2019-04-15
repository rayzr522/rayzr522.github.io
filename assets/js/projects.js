const PROJECTS = [
    {
        name: 'SharpBot',
        link: 'https://github.com/RayzrDev/SharpBot',
        description: 'SharpBot is an ever-expanding Discord selfbot written with Discord.js that has a bunch of fun and useful commands'
    },
    {
        name: 'Odyssey Interactive',
        link: 'https://github.com/Rayzr522/odyssey-interactive',
        description: 'A 2D game that recreates the scene with Scylla and Charybdis from Homer\'s \'The Odyssey\' in an interactive form'
    },
    {
        name: 'OldCombatMechanics',
        link: 'https://github.com/gvlfm78/BukkitOldCombatMechanics',
        description: 'A Bukkit plugin which recreates the 1.8 combat mechanics and gameplay features for Minecraft 1.9+'
    },
    {
        name: 'zstream-server',
        link: 'https://github.com/Rayzr522/zstream-server',
        description: 'A music streaming server written from scratch to stream your home library'
    },
    {
        name: 'JSONMessage',
        link: 'https://github.com/Rayzr522/JSONMessage',
        description: 'A Bukkit utility library which aids in the creation and sending of JSON messages'
    },
    {
        name: 'DecoHeads',
        link: 'https://github.com/Rayzr522/DecoHeads',
        description: 'A Bukkit plugin which adds a sleak interface for obtaining decorative player heads for all your design needs'
    },
    {
        name: 'method-inject',
        link: 'https://github.com/Rayzr522/method-inject',
        description: 'A JavaScript library that provides a simple way for injecting and transforming methods'
    },
    {
        name: 'rawrgs',
        link: 'https://github.com/Rayzr522/rawrgs',
        description: 'A super lightweight argument parser for Node.JS with zero external dependencies'
    },
];

function makeProject(data) {
    var column = document.createElement('div');
    column.classList.add('col');

    var box = document.createElement('div');
    box.classList.add('box');

    var link = document.createElement('a');
    link.href = data.link;
    link.innerText = data.name;

    var description = document.createElement('p');
    description.innerText = data.description;

    box.appendChild(link);
    box.appendChild(document.createElement('hr'));
    box.appendChild(description);

    column.appendChild(box);

    return column;
}

function makeAllProjects() {
    var projects = PROJECTS.slice(0);
    var output = document.getElementById('projects');

    while (projects.length) {
        var chunk = projects.splice(0, 4);

        var columns = document.createElement('div');
        columns.classList.add('col', 'align-column');

        for (var i = 0; i < chunk.length; i++) {
            var project = makeProject(chunk[i]);
            columns.appendChild(project);
        }

        output.appendChild(columns);
    }
}

window.addEventListener('load', function () {
    // makeAllProjects();
});
