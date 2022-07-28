import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = "Lucas Eduardo Sechirolli da Silva";
  imageUrl = "https://picsum.photos/300/300";
  bgColor = "green";
  btnClass = "btn-success"
  txtinput = "";

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(){
    return this.bgColor === "green" ? this.bgColor = "red" : this.bgColor = "green"
  }
  
  clicou2(){
    return this.btnClass === "btn-success" ? this.btnClass = "btn-danger" : this.btnClass = "btn-success"
  }

  clicouNoFilho(text:string){
    console.log(text)
  }
}
