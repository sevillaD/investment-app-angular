import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  updateForm!:FormGroup;

  company!:Company;
  errorMessage:string="";

  dividendCompany:boolean[] = [true, false];
  industry:string[] = ['Industrials', 'Real Estate', 'Technology', 'Financials', 'Energy', 'Renewable Energy', 'Consumer Cyclicals', 'Basic Materials'];

  constructor(private route:ActivatedRoute,
              private router:Router,
              public dialogRef: MatDialogRef<UpdateCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
              private companyService: CompaniesService) { }

  ngOnInit(): void {


    this.updateForm = new FormGroup({
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


    this.companyService.getCompanyById(this.data.id).subscribe(

      data=>{
        console.log("Data" + this.data);
        
        this.updateForm = new FormGroup({
          'companyId': new FormControl(data['companyId']),
          'companyName': new FormControl(data['companyName']),
          'stockSymbol':new FormControl(data['stockSymbol']),
          'sector': new FormControl(data['sector']),
          'dividend': new FormControl(data['dividend']),
          'dividendAmount': new FormControl(data['dividendAmount']),
          'createdBy': new FormControl(data['createdBy']),
          'createdDate': new FormControl(data['createdDate']),
          'lastUpdatedBy': new FormControl(data['lastUpdatedBy']),
          'lastUpdatedDate': new FormControl(data['lastUpdatedDate'])
        });



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
