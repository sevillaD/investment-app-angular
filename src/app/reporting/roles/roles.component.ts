import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/model/Role';
import { RoleServiceService } from 'src/app/services/role-service.service';
import { UpdateRoleComponent } from 'src/app/updateFeature/update-role/update-role.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesComponent implements OnInit, AfterViewInit{

  role: Role[] = [];
  displayedColumns:string[]= ['roleId', 'name', 'description', 'createdBy', 'createdDate', 'lastUpdatedBy', 'lastUpdatedDate'];
  dataSource = new MatTableDataSource<Role>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roleService: RoleServiceService,
              public dialog: MatDialog,
              public cd: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.roleService.getAllRoles().subscribe(
      data=>{
        this.dataSource.data = data;
      }
    )

  }

  openDialog(roleId: number):void{

    const dialogRef = this.dialog

    .open(UpdateRoleComponent, {
      data:{id: roleId}
    })

    .afterClosed()
    .subscribe((shouldReload: boolean)=>{

      if(shouldReload){
        this.roleService.getAllRoles().subscribe(
          data=>{
            this.dataSource.data = data;
          }
        )
        this.cd.detectChanges();
      }


    })



  }



}
