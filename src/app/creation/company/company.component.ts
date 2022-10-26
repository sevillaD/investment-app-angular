import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  company!:Company;
  createForm!: FormGroup;
  errorMessage!:String;

  industry:string[] = ['Industrials', 'Real Estate', 'Technology', 'Financials', 'Energy', 'Renewable Energy', 'Consumer Cyclicals', 'Basic Materials'];
  dividendCompany:boolean[] = [true, false];
  

  constructor(private companyService: CompaniesService,
              private router: Router) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      'companyId': new FormControl(),
      'companyName': new FormControl(null, Validators.required),
      'stockSymbol':new FormControl(null, Validators.required),
      'sector': new FormControl(null, Validators.required),
      'dividend': new FormControl(null, Validators.required),
      'dividendAmount': new FormControl(0, Validators.required),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate': new FormControl()
    });

  }


  onSubmit(){

    console.log("What are you doing?");

    this.company = new Company(

        this.createForm.get('companyId')?.value,
        this.createForm.get('companyName')?.value,
        this.createForm.get('stockSymbol')?.value,
        this.createForm.get('sector')?.value,
        this.createForm.get('dividend')?.value,
        this.createForm.get('dividendAmount')?.value,
        this.createForm.get('createdBy')?.value,
        this.createForm.get('createdDate')?.value,
        this.createForm.get('lastUpdatedBy')?.value,
        this.createForm.get('lastUpdatedDate')?.value
    )


 
      this.companyService.addCompany(this.company).subscribe(
        data=>{
          this.router.navigate([""]);
        }, err =>{
          this.errorMessage = "Unable to add company record!";
          console.log(err);
        }
      )
    

  
  }


  

  updateValue(value: boolean){

    if(value == true){
      return 'Yes';
    } else{
      return 'No'
    }
  }



}
