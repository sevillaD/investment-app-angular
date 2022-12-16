import { ChangeDetectorRef, Component, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transactions } from '../model/Transactions';
import { TransactionsService } from '../services/transactions.service';
import { UpdateTransactionComponent } from '../updateFeature/update-transaction/update-transaction.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transactions: Transactions[] = [];

  displayedColumns:string[] = 
  ['transactionId', 'stockSymbol', 'transactionType', 'quantity', 'price', 'transactionAmount', 'buyingDate' ];
  dataSource = new MatTableDataSource<Transactions>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
 

  constructor(private transactionService: TransactionsService,
              public dialog: MatDialog,
              public cd: ChangeDetectorRef) { }



  ngOnInit(): void {

    this.transactionService.getAllOpenTransactions().subscribe(
      data=>{
        this.dataSource.data = data;

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
