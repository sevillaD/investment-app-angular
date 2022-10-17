import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/Company';

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
              public dialogRef: MatDialogRef<UpdateCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {

    console.log("Id:" + this.data.id);

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
  }


  updateValue(value: boolean){

    if(value == true){
      return 'Yes';
    } else{
      return 'No'
    }
  }


}
