import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { NgxSpinnerModule } from 'ngx-spinner';
// import { AdsenseModule } from 'ng2-adsense';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { AdblockComponent } from './adblock/adblock.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AdblockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgHcaptchaModule.forRoot({
        siteKey: '9df504e5-b11a-48ee-99a6-7354851c911d'
    }),
    // AdsenseModule.forRoot({
    //   adClient: 'ca-pub-3073718421833762',
    //   // adSlot: 0,
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
