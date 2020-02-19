import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComapnyComponent } from './comapny/comapny.component';
import { CompComponent } from './comp/comp.component';
import { CompanyRoutingModule } from './app-routing/company-routing.module';

@NgModule({
  declarations: [
    ComapnyComponent,
    CompComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
