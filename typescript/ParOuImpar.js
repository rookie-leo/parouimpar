"use strict";
exports.__esModule = true;
exports.NumPlayer = void 0;
var NumPlayer = /** @class */ (function () {
    function NumPlayer() {
    }
    return NumPlayer;
}());
exports.NumPlayer = NumPlayer;
function parOuImpar(player, pc) {
    var result = player + pc;
    if (result % 2 == 0) {
        return "PAR";
    }
    else {
        return "IMPAR";
    }
}
function checkUp() {
}
window.onload = function () {
    //let form = document.querySelector("#num");
    var pc = Math.floor(Math.random() * 10);
    var player = new NumPlayer();
    //player.num = 3;
    document.getElementById('content').innerHTML = "Conteudo do form é " + parOuImpar(player.num, pc);
    console.log(player);
};
