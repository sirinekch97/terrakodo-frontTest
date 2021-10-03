import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  loading = false;
  registerForm: FormGroup;
  submitted = false;

  email
  password ;

  constructor(private router: Router,private formBuilder: FormBuilder,private AuthService:AuthService ) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  get l() {

    return this.registerForm.controls;
  }
  authentifer() {
    this.submitted = true;

    if (this.registerForm.invalid) {

      return
    }
    this.AuthService.login(this.registerForm.value['email'], this.registerForm.value['password']).subscribe(res => {


        console.log(res);
        console.log(this.registerForm.value['email']);
        console.log(this.registerForm.value['password']);

        if (JSON.parse(JSON.stringify(res)).status === "success") {
          localStorage.setItem('token', JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data.token)));
          localStorage.setItem('user', JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user));
          this.router.navigate(['/home/tasks/allTasks'])
        } else {

          if (JSON.parse(JSON.stringify(res)).status === "erreur") {
            Swal.fire('Erreur', 'Merci de vérifier votre email et password!', 'error')
            this.registerForm.reset()

          }
        }
      }
    )
  }
  Reg(){

    
    this.router.navigate(['/register']);

  }

}
