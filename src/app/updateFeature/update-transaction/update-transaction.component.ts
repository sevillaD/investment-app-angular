import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionComponent } from 'src/app/creation/transaction/transaction.component';
import { Company } from 'src/app/model/Company';
import { CompaniesService } from 'src/app/services/companies.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {

  updateForm!:FormGroup;
  transactions!:TransactionComponent;
  errorMessage:string="";
  status: string[] = ['Open', 'Closed'];
  transactionType:string[] = ['Stocks', 'Dividend'];

  /**Get company id and stock symbol to populate stock symbol field */
  companies:Company[] = [];

  constructor(private route: ActivatedRoute,
              private router:Router,
              public dialogRef:MatDialogRef<UpdateTransactionComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
              private transactionService: TransactionsService,
              private companyService:CompaniesService) { }

  ngOnInit(): void {

    /**Create for programatically */
    this.updateForm = new FormGroup({
      'transactionId': new FormControl(),
      'transactionType': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'transactionAmount': new FormControl(null, Validators.required),
      'buyingDate':new FormControl(null, Validators.required),
      'sellingPrice': new FormControl(null, Validators.required),
      'realizedGain': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate':new FormControl(),
      'companyId': new FormControl()
    });

    /**Populate form programatically**/
    this.transactionService.getTransaction(this.data.id).subscribe(

      data=>{

        this.getCompaniesData();

        console.log(data);

        this.updateForm = new FormGroup({
            'transactionId': new FormControl(data['transactionId']),
            'transactionType': new FormControl(data['transactionType']),
            'quantity': new FormControl(data['quantity']),
            'price': new FormControl(data['price']),
            'transactionAmount': new FormControl(data['transactionAmount']),
            'buyingDate':new FormControl(data['buyingDate']),
            'sellingPrice': new FormControl(data['sellingPrice']),
            'realizedGain': new FormControl(data['realizedGain']),
            'status': new FormControl(data['status']),
            'createdBy': new FormControl(data['createdBy']),
            'createdDate': new FormControl(data['createdDate']),
            'lastUpdatedBy': new FormControl(data['lastUpdatedBy']),
            'lastUpdatedDate':new FormControl(data['lastUpdatedDate']),
            'companyId': new FormControl(data['companyId'])
        });

      }

    )

    }


    updateTransaction(){

      this.transactionService.updateTransaction(this.updateForm.value).subscribe(

        data=>{
          console.log(data, "Data has been updated successfully!");
          this.router.navigate(['/historical-transactions']);
        }, err=>{
          this.errorMessage = "Unable to update transaction!"
          console.log(this.errorMessage);
        }
      )

    }


    getCompaniesData(){
      this.companyService.getCompanies().subscribe(
        data=>{
          this.companies = data;
        }
      )
    }

}
