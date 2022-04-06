import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-ou-impar',
  templateUrl: './par-ou-impar.component.html',
  styleUrls: ['./par-ou-impar.component.css']
})
export class ParOuImparComponent implements OnInit {
  numPlayer: number = 0;
  numPc: number = 0;
  resultado: string = '';
  result: number = 0;
  option: string = '';

  numero(evento: KeyboardEvent) {
    this.numPlayer = Number.parseInt((<HTMLInputElement>evento.target).value);
  }

  parOuImpar(): any {
    this.numPc = Math.floor(Math.random() * 10);
    this.result = this.numPlayer + this.numPc;

    if (this.result % 2 == 0) {
      this.resultado = "PAR";
      return this.resultado;
    } else {
      this.resultado = "IMPAR";
      return this.resultado;
    }
  }

  verificaVencedor(option: any, resultado: any): string {
    if (this.resultado == option) {
      return "Voce Venceu!";
    } else {
      return "Voce Perdeu!"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
