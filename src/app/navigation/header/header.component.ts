import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { CompanyComponent } from 'src/app/creation/company/company.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onToggleSidenav(){
    this.sideNavToggle.emit();
  }

  openDialog(){
      const dialogRef = this.dialog.open(CompanyComponent);

      dialogRef.afterClosed().subscribe(result=>{
        console.log('Dialog result: ${result}');
      })
  }

}
