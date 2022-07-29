import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text= "Hello World!";
  date = new Date;
  pessoa = {
    nome: "Lucas",
    idade:18,
    profissao: "Programador",
  };
  nomes = ["Lucas"];

  constructor() { }

  ngOnInit(): void {
    
  }

  mudaValor(){
    this.number = this.number + this.number;
  }

  limpaValor(){
    this.number = 0;
  }

  add(text:string){
    this.nomes.push(text)
  }

}
