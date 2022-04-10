import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DownLoadPageComponent } from './download-page/download-page.component';


@NgModule({
  declarations: [DownLoadPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  
})
export class HomeModule { }
