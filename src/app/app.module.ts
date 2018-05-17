import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// 设置为hash模式
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
