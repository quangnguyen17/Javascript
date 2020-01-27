
// empty world
var world = [];

var dictObj = {
    0: "empty",
    1: "brick",
    2: "coin",
    3: "cherry",
    4: "pacman"
}

var pacman = { row: 5, col: 5, direction: "up" };

function generateWorld() {
    for (var row = 0; row < 10; row++) {
        world.push([]);
        for (var col = 0; col < 10; col++) {
            var numVal = Math.floor(Math.random() * 4) + 0;

            if (row == 0 || col == 0 || row == 9 || col == 9) {
                numVal = 1;
            }

            if (row == pacman.row && col == pacman.col) {
                numVal = 4;
            }

            world[row].push(numVal);
        }
    }
}

generateWorld();

function refreshWorld() {
    for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
            numVal = world[row][col];

            if (row == 0 || col == 0 || row == 9 || col == 9) {
                numVal = 1;
            }

            if (row == pacman.row && col == pacman.col) {
                numVal = 4;
            }

            world[row][col] = numVal;
        }
    }

    displayWorld();
}

function displayWorld() {
    var output = "";

    for (var row in world) {
        output += "<div class='row'>";

        for (var col in world[row]) {
            var type = dictObj[world[row][col]];
            var classOrId = (new String(type).valueOf() == new String("pacman").valueOf()) ? "id" : "class";
            output += `<div ${classOrId}="${type}"></div>`;
        }

        output += "</div>";
    }

    document.getElementById('world').innerHTML = output;
}

displayWorld();

document.onkeydown = function (e) {
    world[pacman.row][pacman.col] = 0;

    switch (e.keyCode) {
        case 37: // left
            if (world[pacman.row][pacman.col - 1] !== 1) { // avoid bricks
                pacman.col--;
                pacman.direction = "left";
            }

            break;
        case 38: // top
            if (world[pacman.row - 1][pacman.col] !== 1) { // avoid bricks
                pacman.row--;
                pacman.direction = "up";
            }

            break;
        case 39: // right
            if (world[pacman.row][pacman.col + 1] !== 1) { // avoid bricks
                pacman.col++;
                pacman.direction = "right";
            }

            break;
        case 40: // bottom
            if (world[pacman.row + 1][pacman.col] !== 1) { // avoid bricks
                pacman.row++;
                pacman.direction = "bottom";
            }

            break;
    }

    refreshWorld();
    rotatePacman();
}

function rotatePacman() {
    var pacmanElement = document.getElementById('pacman');

    switch (pacman.direction) {
        case "up":
            pacmanElement.style.transform = "rotate(-90deg)";
            break;
        case "right":
            pacmanElement.style.transform = "scaleX(1)";
            break;
        case "left":
            pacmanElement.style.transform = "scaleX(-1)";
            break;
        case "bottom":
            pacmanElement.style.transform = "rotate(90deg)";
            break;
    }
}