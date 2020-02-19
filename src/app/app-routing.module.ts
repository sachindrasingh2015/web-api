import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { PreloadService } from './preload.service';
// import { CompanyModule } from './company/company.module';
// import { EmployeeModule } from './employee/employee.module';


const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'company', pathMatch:'full'
  // },
  {
    path:'company',
    loadChildren: ()=>import('./company/company.module').then( m =>m.CompanyModule),
    data: {preload: true}
  },
  {
    path:'emp',
    loadChildren: () =>import('./employee/employee.module').then(m =>m.EmployeeModule),
    data: {preload: false}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy:PreloadAllModules}
    )
  ],
  exports: [RouterModule
  ],
  providers:[]
})
export class AppRoutingModule { }
