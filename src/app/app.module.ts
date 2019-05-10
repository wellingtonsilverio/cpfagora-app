import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePT from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AdblockComponent } from './adblock/adblock.component';
import { PlanComponent } from './plan/plan.component';
import { ApiDocComponent } from './api-doc/api-doc.component';
import { PlanHireModalComponent } from './plan-hire-modal/plan-hire-modal.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ArchwizardModule } from 'angular-archwizard';
import { TextMaskModule } from 'angular2-text-mask';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AdblockComponent,
    PlanComponent,
    PlanHireModalComponent,
    ApiDocComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ArchwizardModule,
    NgxSmartModalModule.forRoot(),
    NgHcaptchaModule.forRoot({
        siteKey: '9df504e5-b11a-48ee-99a6-7354851c911d'
    }),
    TextMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
