import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/Role';
import { User } from 'src/app/model/User';
import { RoleServiceService } from 'src/app/services/role-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  createForm!:FormGroup;
  errorMessage!:string;
  roles: Role[]= [];
  

  constructor(private userService: UserServiceService,
              private router: Router,
              private roleService: RoleServiceService) { }

  ngOnInit(): void {

    this.getAllRoles();

    this.createForm = new FormGroup({
      'userId': new FormControl(),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate': new FormControl(),
      'token': new FormControl(),
      'roles': new FormControl()
    });
  }


  onSubmit(){

    this.user = new User(

        this.createForm.get('userId')?.value,
        this.createForm.get('firstName')?.value,
        this.createForm.get('lastName')?.value,
        this.createForm.get('email')?.value,
        this.createForm.get('password')?.value,
        this.createForm.get('createdBy')?.value,
        this.createForm.get('createdDate')?.value,
        this.createForm.get('lastUpdatedBy')?.value,
        this.createForm.get('lastUpdatedDate')?.value,
        this.createForm.get('token')?.value,
        this.createForm.get('roles')?.value

    )

    console.log(this.user);
    
    this.userService.addUser(this.user).subscribe(
      data=>{
        this.router.navigate([""]);
      }, err=>{
        this.errorMessage = "Unable to add user!";
        console.log(err);
      }
    )

  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe(
      data=>{
        this.roles = data;
        console.log(data);
      }
    )
  }


}
