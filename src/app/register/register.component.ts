import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  loading;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private AuthService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("le formulaire est invalide : ", this.registerForm.value);
      return;
    }

    this.AuthService.ajout(this.registerForm.value).subscribe((res) => {
      console.log("ajout avec succés");
      console.log(res);
      this.router.navigate(["/tasks/allTasks"]);
    });
  }
}
