import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CustomPageRoutingModule } from './custom-page.routing';
import { CustomPageComponent } from './custom-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPageRoutingModule,
  ],
  declarations: [CustomPageComponent]
})


export class CustomPageModule {

}
