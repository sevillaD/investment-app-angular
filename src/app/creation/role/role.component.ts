import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/Role';
import { RoleServiceService } from 'src/app/services/role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  role!: Role;
  createForm!: FormGroup;
  errorMessage!:string;



  constructor(private roleService:RoleServiceService,
              private router: Router) { }

  ngOnInit(): void {

        this.createForm = new FormGroup({
          'roleId': new FormControl(),
          'name': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required),
          'createdBy': new FormControl(),
          'createdDate': new FormControl(),
          'lastUpdatedBy': new FormControl(),
          'lastUpdatedDate': new FormControl()
          }
          
        )
  }

  onSubmit(){
    
    this.role = new Role(
      this.createForm.get('roleId')?.value,
      this.createForm.get('name')?.value,
      this.createForm.get('description')?.value,
      this.createForm.get('createdBy')?.value,
      this.createForm.get('createdDate')?.value,
      this.createForm.get('lastUpdatedBy')?.value,
      this.createForm.get('lastUpdatedDate')?.value
    )

    this.roleService.addRole(this.role).subscribe(

      data=>{
        this.router.navigate([""]);
      }, err=>{
        this.errorMessage = "Unable to add role!";
        console.log(err);
      }
    )

   

  }




}
