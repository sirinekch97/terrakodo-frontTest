import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "src/app/service/task.service";

@Component({
  selector: "app-addTask",
  templateUrl: "./addTask.component.html",
  styleUrls: ["./addTask.component.css"],
})
export class AddTaskComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  loading;
  constructor(
    private formBuilder: FormBuilder,
    private TaskService: TaskService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priorityLevel: ["", [Validators.required,Validators.min(0),Validators.max(5)]],
      dateComplition: ["", Validators.required],
    });
  }
  get f() {
    console.log("okkkkkkk");

    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("le formulaire est invalide : ", this.registerForm.value);

      return;
    }

    this.TaskService.addTask(this.registerForm.value).subscribe((res) => {
      console.log("ajout avec succés");

      console.log(this.registerForm.value);
    });
  }
}
