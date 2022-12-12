import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
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
  

  constructor(private userService: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      'userId': new FormControl(),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'createdBy': new FormControl(),
      'createdDate': new FormControl(),
      'lastUpdatedBy': new FormControl(),
      'lastUpdatedDate': new FormControl(),
      'token': new FormControl(),
      'role': new FormControl()
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
        this.createForm.get('role')?.value

    )

  }


}
