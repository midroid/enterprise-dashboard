import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LandingModule } from './landing';

export const API_ENDPOINT_AUTHORIZED: string = 'API_ENDPOINT_AUTHORIZED';
export const API_ENDPOINT_LOGIN: string = 'API_ENDPOINT_LOGIN';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    LandingModule
  ],
  providers: [
    { 
      provide: API_ENDPOINT_AUTHORIZED,
      useValue: environment.production?
        'productionURL':
        'testURL'
    },
    {
      provide: API_ENDPOINT_LOGIN,
      useValue: environment.production?
        'productionURLLogin':
        'testURLLogin'
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
