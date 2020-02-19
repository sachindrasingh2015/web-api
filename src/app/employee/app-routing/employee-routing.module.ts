import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from '../emp/emp.component';
import { EmployeeComponent } from '../employee/employee.component';

const emproutes: Routes = [
  {
    path: '', component: EmpComponent,
    children:[
      {
        path:'employee', component:EmployeeComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forChild(emproutes)
  ],
  exports:[RouterModule],
})
export class EmployeeRoutingModule {
  constructor(){
    console.log('employe module')
  }
 }
