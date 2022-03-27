export class NumPlayer {
    public num: number;

}

function parOuImpar(player: number, pc: number): string {
    let result: number = player + pc;

    if (result % 2 == 0) {
        return "PAR";
    } else {
        return "IMPAR";
    }
}

function checkUp() {

}

window.onload = () => {

    //let form = document.querySelector("#num");
    let pc = Math.floor(Math.random() * 10);

    let player = new NumPlayer();

    //player.num = 3;
    
    document.getElementById('content').innerHTML = "Conteudo do form é " + parOuImpar(player.num, pc);
    console.log(player);

}