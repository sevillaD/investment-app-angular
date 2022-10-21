import { Component, OnInit, ViewChild } from '@angular/core';



export class Testing{

  constructor(public companyId:number, public stockSymbol:string){

  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
 

  constructor() { }

  ngOnInit(): void {

  }

 
}
