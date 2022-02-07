import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  isSuccessful = false;

  user:User ={username: '', password: '',email:''};
  constructor(private userservice:UserService, private router: Router) {
    this.registrationForm = new FormGroup({
      "username" : new FormControl("",[Validators.required]),
      "email" : new FormControl("",[Validators.required]),
      "password" : new FormControl("",[Validators.required])
    })
   }

   


   register(){
     this.user.username=this.registrationForm.value.username;
     this.user.email=this.registrationForm.value.email;
     this.user.password=this.registrationForm.value.password;

     return this.userservice.register(this.user).subscribe((response  :any)=>{
      this.isSuccessful=true;
      console.log(this.isSuccessful)
      let route ="/login"
      this.router.navigate([route]);


    }
    ,
      (error) =>{
        console.log(error);
      }
      )

     
   }
    
     
     
  ngOnInit(): void {
  }

}
