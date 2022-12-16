import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoleComponent } from 'src/app/creation/role/role.component';
import { Role } from 'src/app/model/Role';
import { RoleServiceService } from 'src/app/services/role-service.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  updateForm!:FormGroup;
  role!: RoleComponent;
  errorMessage!:string;

  constructor(private roleService: RoleServiceService,
              private router: Router,
              public dialogRef:MatDialogRef<UpdateRoleComponent>, @Inject(MAT_DIALOG_DATA) public data:any
              ) { }

  ngOnInit(): void {

    /** Create update form programatically */
    this.updateForm = new FormGroup({
      'roleId': new FormControl(),
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate': new FormControl()
    });

  /** Populate data into update from based ID that we get from roles page in reporting section */
  this.roleService.getRoleById(this.data.id).subscribe(

    data=>{

      console.log("Data" + this.data);

      this.updateForm = new FormGroup({
        'roleId': new FormControl(data['roleId']),
        'name': new FormControl(data['name']),
        'description': new FormControl(data['description']),
        'createdBy': new FormControl(data['createdBy']),
        'createdDate': new FormControl(data['createdDate']),
        'lastUpdatedBy': new FormControl(data['lastUpdatedBy']),
        'lastUpdatedDate': new FormControl(data['lastUpdatedDate'])
      }
      )
    }
  )
  }


  updateRole(){

    this.roleService.updateRole(this.updateForm.value).subscribe(

      data=>{
        this.router.navigate(['/roles']);
      }, err=>{
        this.errorMessage = "Unable to update role.";
        console.log(err);
      }

    )
  }

}
