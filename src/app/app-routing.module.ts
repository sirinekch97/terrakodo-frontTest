import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'

const routes: Routes = [{path:'home',component:HomeComponent,
children:[{path:'tasks',loadChildren:'./home/tasks/tasks.module#TasksModule'}]},{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
