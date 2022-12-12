import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transactions } from 'src/app/model/Transactions';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UpdateTransactionComponent } from 'src/app/updateFeature/update-transaction/update-transaction.component';

@Component({
  selector: 'app-historical-transactions',
  templateUrl: './historical-transactions.component.html',
  styleUrls: ['./historical-transactions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricalTransactionsComponent implements OnInit, AfterViewInit {

  transactions: Transactions[] = [];

  displayedColumns:string[] = 
  ['transactionId', 'stockSymbol', 'status', 'transactionType', 'quantity', 'price', 'transactionAmount', 'buyingDate','sellingDate', 'sellingPrice','realizedGain' ];
  dataSource = new MatTableDataSource<Transactions>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(private transactionService:TransactionsService,
              public dialog: MatDialog,
              public cd: ChangeDetectorRef) { }

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


  openDialog(transactionId:number):void{

    const dialogRef = this.dialog

    .open(UpdateTransactionComponent, {
      data: {id: transactionId}
    })

    .afterClosed()
    .subscribe((shouldReload:boolean)=>{

      if(shouldReload){
        this.transactionService.getAllTransactions().subscribe(
          data=>{
            this.dataSource.data = data;
          }
        )
        this.cd.detectChanges();
      }


    })



  }




}
