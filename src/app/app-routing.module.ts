import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';


const routes: Routes = [  
  {   
     path: 'Data',  
     component: DatabindComponent,  
     
  }]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
