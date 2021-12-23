import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { 
      provide: LOCALE_ID,
      useValue: 'pt' 
    }
  ]
})
export class AppModule { }
