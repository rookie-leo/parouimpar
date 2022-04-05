import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-ou-impar',
  templateUrl: './par-ou-impar.component.html',
  styleUrls: ['./par-ou-impar.component.css']
})
export class ParOuImparComponent implements OnInit {
  numPlayer: number = 0;
  private numPc: number = Math.floor(Math.random() * 10);
  resultado = '';

  numero(evento: KeyboardEvent) {
    this.numPlayer = Number.parseInt((<HTMLInputElement>evento.target).value);
  }

  parOuImpar(): any {
    let result = this.numPlayer + this.numPc;

    if (result % 2 == 0) {
      this.resultado = "PAR";
      return this.resultado;
    } else {
      this.resultado = "IMPAR";
      return this.resultado;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
