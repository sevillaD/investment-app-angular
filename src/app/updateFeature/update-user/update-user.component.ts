import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/Role';
import { User } from 'src/app/model/User';
import { RoleServiceService } from 'src/app/services/role-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateForm!:FormGroup;
  users:User[] = [];
  errorMessage!: string;
  roles: Role[] = [];
  userRoles: Role [] = [];

  myModel:Role[] = [];

  constructor(private userService: UserServiceService,
              private roleService: RoleServiceService,
              private router: Router,
              public dialogRef: MatDialogRef<UpdateUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.getRoles();

    this.getUserRoles();

    this.updateForm = new FormGroup({
      'userId': new FormControl(),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate': new FormControl(),
      'token': new FormControl(),
      'roles': new FormControl()
    });

   
    this.userService.getUserById(this.data.id).subscribe(

     data=>{
        this.updateForm = new FormGroup({
          'userId': new FormControl(data['userId']),
          'firstName': new FormControl(data['firstName']),
          'lastName': new FormControl(data['lastName']),
          'email': new FormControl(data['email']),
          'password': new FormControl(data['password']),
          'createdBy': new FormControl(data['createdBy']),
          'createdDate': new FormControl(data['createdDate']),
          'lastUpdatedBy': new FormControl(data['lastUpdatedBy']),
          'lastUpdatedDate': new FormControl(data['lastUpdatedDate']),
          'token': new FormControl(data['token']),
          'roles': new FormControl(data['roles'])
        });
     }
    )
  }


  updateUser(){

    this.userService.updateUser(this.updateForm.value).subscribe(

      data=>{
        this.router.navigate(['/users']);
      }, err=>{
        this.errorMessage = "Unable to updated user!";
        console.log(err);
      }

    )

  }

  getUserRoles(){

    this.userService.getUserById(this.data.id).subscribe(

      data=>{
        this.userRoles = data.roles;
        console.log(this.userRoles)
      }
    )

  }

 

  getRoles(){
    this.roleService.getAllRoles().subscribe(
      data=>{
        this.roles = data;
      }
    )
  }




}
