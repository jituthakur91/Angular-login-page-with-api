import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  constructor(private apiService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
    if (this.loginForm.invalid){
      return
    }
    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
  
    this.apiService.login(loginData).subscribe((data: any) => {
      this.message = data.message;
      if (data.token){
        window.localStorage.setItem('token', data.token);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    })
  }
  
  // loginUser(event){
  //   event.preventDefault();
  //   const target = event.target
  //   const username = target.querySelector("#username").value
  //   const password = target.querySelector("#password").value
  //   this.Auth.getUserDetails(username, password);
  //   console.log(event);
  // }
}
