import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { CompanyComponent } from 'src/app/creation/company/company.component';
import { TransactionComponent } from 'src/app/creation/transaction/transaction.component';
import { Transactions } from 'src/app/model/Transactions';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /** This event should will be listenable from the outside*/
  @Output()
  sideNavToggle = new EventEmitter<void>();

  globalIcon = faGlobe;

  constructor(public dialog: MatDialog, 
              private router:Router) { }

  ngOnInit(): void {
  }

  onToggleSidenav(){
    this.sideNavToggle.emit();
  }

  openDialog(){
      const dialogRef = this.dialog.open(CompanyComponent);

      dialogRef.afterClosed().subscribe(result=>{
        console.log('Dialog result: ${result}');
        this.router.navigate(['/']);
      })
  }


  openTransactionsDialog(){
    const dialogRef = this.dialog.open(TransactionComponent);

    dialogRef.afterClosed().subscribe(result=>{
      
      console.log('Dialog result: ${result}');
      this.router.navigate(['/']);
    
    })
}

}
