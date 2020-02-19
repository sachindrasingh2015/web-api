import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComapnyComponent } from '../comapny/comapny.component';
import { CompComponent } from '../comp/comp.component';


const companyroutes:Routes =[
  {
    path:'', component: ComapnyComponent,
    children:[
      {
        path:'company', component:ComapnyComponent
      },
      {
        path:'comp', component:CompComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forChild(companyroutes)
  ],
  exports: [ RouterModule ],
  // providers:[]
})
export class CompanyRoutingModule {
  constructor(){
    console.log('company module');
  }
 }
