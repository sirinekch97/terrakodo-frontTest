import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "src/app/service/task.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-allTasks",
  templateUrl: "./allTasks.component.html",
  styleUrls: ["./allTasks.component.css"],
})
export class AllTasksComponent implements OnInit {
  tab;
  registerForm: FormGroup;
  submitted = false;
  loading;
  _id: any;
  constructor(
    private formBuilder: FormBuilder,
    private TaskService: TaskService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: [""],
      description: [""],
      priorityLevel: [""],
      dateComplition: [""],
    });
    this.allTasks();
  }
  allTasks() {
    this.TaskService.getallTask().subscribe((res) => {
      this.tab = res;
    });
  }
  delete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
    }).then((result) => {
      if (result.value) {
        console.log(id)
        this.TaskService.deleteTask(id).subscribe((res) => {
          console.log(res);
          this.allTasks();
        });
      }
    });
  }
  recuperer(_id, title, description, priorityLevel, dateComplition) {
    this._id = _id;
    console.log(this._id);
    this.registerForm.get("title").setValue(title);
    this.registerForm.get("description").setValue(description);
    this.registerForm.get("priorityLevel").setValue(priorityLevel);
    this.registerForm.get("dateComplition").setValue(dateComplition);
  }
  get p() {
    return this.registerForm.controls;
  }
  update() {
    this.submitted = true;
    this.TaskService.updateTask(this._id, this.registerForm.value).subscribe(
      (res) => {
        console.log("data", res);
        this.allTasks();
        this.submitted = false;
      }
    );
    if (this.registerForm.invalid) {
      return;
    }
  }
}
