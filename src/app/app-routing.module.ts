import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee_list/employee.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {HomeComponent} from './home/home.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [

    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {
        path: 'home', component: HomeComponent, children: [
        { path: 'list', component: EmployeeComponent },
        { path: 'create', component: EmployeeCreateComponent },
        { path: 'edit', component: EmployeeEditComponent },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
