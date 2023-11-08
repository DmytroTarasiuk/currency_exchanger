import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EheaderComponent } from './eheader/eheader.component';
import { EselectComponent } from './eselect/eselect.component';

@NgModule({
  declarations: [
    AppComponent,
    EheaderComponent,
    EselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
