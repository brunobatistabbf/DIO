var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("tap, tap");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    },


}
var model = {

    boardSize: 7,
    numShips: 3,
    shipLenght: 3,
    shipsSunk: 0,



    ships =[{ locations: ["10", "20", "30"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: [" ", " ", " "] },
    { locations: ["63", "64", "65"], hits: ["", "", ""] }
    ],

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++)
        var ship = this.ships[i];
        locarions = ship.locations;
        var index = locations.indexOf(guess);
        if (index >= 0 ) {
            console.log("Voce tem um hit");
            ship.hits[index] = "hit"
            return true;
        }
        return false;
    }
    

}

