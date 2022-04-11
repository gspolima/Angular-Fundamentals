import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { SpongeBobCasePipe } from './shared/spongebob-case.pipe';
import { StarComponent } from './shared/star.component';
import { RangeSliderComponent } from './range-slider/range-slider/range-slider.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    SpongeBobCasePipe,
    StarComponent,
    RangeSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
