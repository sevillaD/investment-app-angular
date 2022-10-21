import { AfterViewInit, Component, OnInit, Pipe, ViewChild, PipeTransform, OnChanges, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/model/Company';
import { CompaniesService } from 'src/app/services/companies.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCompanyComponent } from 'src/app/updateFeature/update-company/update-company.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CompaniesComponent implements OnInit, AfterViewInit {

  companies: Company[] = [];
  displayedColumns:string[] = ['companyId', 'companyName', 'stockSymbol', 'sector', 'dividend', 'dividendAmount', 'createdDate' ];
  dataSource = new MatTableDataSource<Company>();
  companyId!:number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private companyService:CompaniesService, 
              public dialog: MatDialog,
              public cd: ChangeDetectorRef) { 

  }
  
  ngOnInit(): void {


      //Assigning data to dataSource
      this.companyService.getCompanies().subscribe(
        data=>{
          this.dataSource.data = data;
        }
      )

      
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getCompanies(){
    this.companyService.getCompanies().subscribe(
      data =>{
        console.log(data);
        this.companies = data;
      }, (error)=>{
        console.log(error);
      }
    )
  }

  //This will be applied to dividend column. If true show value as Y, otherwise show value as N
  updateVal(value:boolean){
    
    if(value == true){
      return 'Y';
    } else{
      return 'N';
    }

  }


  
openDialog(companyId:number):void{
  
  const dialogRef = this.dialog
  
  .open(UpdateCompanyComponent, {
      data:{id: companyId}
  })


  .afterClosed()
  .subscribe((shouldReload:boolean)=>{
    
    if(shouldReload) {
      
       //Assigning data to dataSource
       this.companyService.getCompanies().subscribe(
        data=>{
          this.dataSource.data = data;
        }
      )
        this.cd.detectChanges();
    }

  })



}


 

}
