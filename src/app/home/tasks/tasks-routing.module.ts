import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTasksComponent} from './allTaks/alltasks.component';
import {AddTaskComponent} from './addTask/addTask.component';

const routes: Routes = [{path:'addTask',component:AddTaskComponent}
          ,{path:'allTasks',component:AllTasksComponent}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
