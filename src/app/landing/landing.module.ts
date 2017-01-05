import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Landing } from './landing';

import { LandingRoutesModule } from './landing-routes.module';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    LandingRoutesModule
  ],
  declarations: [
    Landing
  ],
  providers: [
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingModule {}