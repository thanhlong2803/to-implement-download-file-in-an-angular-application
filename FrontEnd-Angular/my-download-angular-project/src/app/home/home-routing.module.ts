import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownLoadPageComponent } from './download-page/download-page.component';

const routes: Routes = [
  {
    path: 'download-page',
    component: DownLoadPageComponent,
    data: {
      title: 'handle download file',   
    },  
  } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
