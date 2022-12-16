import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UpdateUserComponent } from 'src/app/updateFeature/update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit, AfterViewInit{

  users: User[]= [];
  // displayedColumns:string[]= ['userId', 'firstName', 'lastName', 'email', 'createdBy', 'createdDate', 'lastUpdatedBy', 'lastUpdatedDate'];
  displayedColumns:string[] = ['userId', 'firstName', 'lastName', 'email', 'roles'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserServiceService,
              private dialog: MatDialog,
              public cd: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      data=>{
        console.log( data);
        this.dataSource.data = data;
      }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(userId: number):void{

    const dialogRef = this.dialog

    .open(UpdateUserComponent, {
      data:{id: userId}
    })

    .afterClosed()
    .subscribe((shouldReload: boolean)=>{

      if(shouldReload){
        this.userService.getAllUsers().subscribe(
          data=>{
            this.dataSource.data = data;
          }
        )
        this.cd.detectChanges();
      }


    })

  }

  

}
