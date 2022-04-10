import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownLoadPageComponent } from './home/download-page/download-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ConfirmComponent } from './_components/_comfirm/comfirm.component';
import { LoadingComponent } from './_components/_loading/loading.component';
import { AlertComponent } from './_components/_alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DownLoadPageComponent,
    ConfirmComponent ,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
		LoadingComponent,
		ConfirmComponent
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
