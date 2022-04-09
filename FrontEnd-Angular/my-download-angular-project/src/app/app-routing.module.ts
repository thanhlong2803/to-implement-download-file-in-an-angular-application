import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DownLoadPageComponent } from './home/download-page/download-page.component';

const routes: Routes = [  
  { path: 'download-page', component: DownLoadPageComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
