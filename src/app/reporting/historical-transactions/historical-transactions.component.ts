import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transactions } from 'src/app/model/Transactions';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-historical-transactions',
  templateUrl: './historical-transactions.component.html',
  styleUrls: ['./historical-transactions.component.css']
})
export class HistoricalTransactionsComponent implements OnInit, AfterViewInit {

  transactions: Transactions[] = [];

  displayedColumns:string[] = 
  ['transactionId', 'stockSymbol', 'status', 'transactionType', 'quantity', 'price', 'transactionAmount', 'buyingDate','sellingDate', 'sellingPrice','realizedGain' ];
  dataSource = new MatTableDataSource<Transactions>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  

  constructor(private transactionService:TransactionsService) { }

  ngOnInit(): void {

    this.transactionService.getAllTransactions().subscribe(
      data=>{
        this.dataSource.data = data;
      }
    )

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getTransactions(){
    this.transactionService.getAllTransactions().subscribe(
      data=>{
        console.log(data);
        this.transactions = data;
      }
    )
  }

}
