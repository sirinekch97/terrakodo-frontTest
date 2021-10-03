import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { AddTaskComponent } from './addTask/addTask.component';
import { AllTasksComponent } from './allTaks/alltasks.component';


@NgModule({
  declarations: [AddTaskComponent, AllTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TasksModule { }
