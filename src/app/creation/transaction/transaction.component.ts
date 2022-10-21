import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { Transactions } from 'src/app/model/Transactions';
import { CompaniesService } from 'src/app/services/companies.service';
import { TransactionsService } from 'src/app/services/transactions.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  companies:Company[] = [];
  companyList!:Company;
  transactions!: Transactions;

  //transactions!: Transactions;
  createForm!:FormGroup;
  errorMessage!:string;

  transactionType:string[] = ['Stocks', 'Dividends'];

  constructor(private companyService: CompaniesService,
              private transactionService: TransactionsService,
              private router: Router ) { }

  ngOnInit(): void {

    this.getCompaniesData();

    
    this.createForm = new FormGroup({
        'transactionId': new FormControl(),
        'transactionType': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'transactionAmount': new FormControl(),
        'buyingDate': new FormControl(null, Validators.required),
        'sellingDate': new FormControl(),
        'sellingPrice': new FormControl(),
        'realizedGain': new FormControl(),
        'status': new FormControl(),
        'createdBy': new FormControl(),
        'createdDate': new FormControl(),
        'lastUpdatedBy': new FormControl(),
        'lastUpdatedDate': new FormControl(),
        'companyId': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){

    /**Get values provided by user in form */
    this.transactions = new Transactions(
      
      this.createForm.get('transactionId')?.value,
      this.createForm.get('transactionType')?.value,
      this.createForm.get('quantity')?.value,
      this.createForm.get('price')?.value,
      this.createForm.get('transactionAmount')?.value,
      this.createForm.get('buyingDate')?.value,
      this.createForm.get('sellingDate')?.value,
      this.createForm.get('sellingPrice')?.value,
      this.createForm.get('realizedGain')?.value,
      this.createForm.get('status')?.value,
      this.createForm.get('createdBy')?.value,
      this.createForm.get('createdDate')?.value,
      this.createForm.get('lastUpdatedBy')?.value,
      this.createForm.get('lastUpdatedDate')?.value,
      this.createForm.get('companyId')?.value
    )
    
    /**Create a new record */
    this.transactionService.addTransaction(this.transactions).subscribe(
      data=>{
        this.router.navigate(['/historical-transactions']);
      }, err=>{
        this.errorMessage = "Unable to create record";
        console.log(err);
      }
    )
    

  }


  getCompaniesData(){
    this.companyService.getCompanies().subscribe(
      data=>{
        this.companies = data;
        console.log(data);
      }
    )
  }





}
