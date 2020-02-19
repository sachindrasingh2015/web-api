import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp/emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRoutingModule } from './app-routing/employee-routing.module';



@NgModule({
  declarations: [EmpComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
