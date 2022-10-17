import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';
import { CompaniesService } from '../services/companies.service';

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
