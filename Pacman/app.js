
// empty world
var world = [];

var dictObj = {
    0: "empty",
    1: "brick",
    2: "coin",
    3: "pacman"
}

function generateWorld() {
    for (var row = 0; row < 10; row++) {
        world.push([]);
        for (var col = 0; col < 10; col++) {
            var numVal = Math.floor(Math.random() * 3) + 0;

            if (row == 0 || col == 0 || row == 9 || col == 9) {
                numVal = 1;
            }

            world[row].push(numVal);
        }
    }
}

generateWorld();

function displayWorld() {
    var output = "";

    for (var row in world) {
        output += "<div class='row'>";

        for (var col in world[row]) {
            var type = dictObj[world[row][col]];
            output += `<div class="${type}"></div>`;
        }

        output += "</div>";
    }

    document.getElementById('world').innerHTML = output;
}

displayWorld();

