import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomPageRoutingModule } from './custom-page.routing';
import { CustomPageComponent } from './custom-page.component';
import { CustomPageService } from './custom-page.service';
import { CwsSharedLibModule } from '../cws-shared-lib.module';
export interface AppConfig {
  appUrl: string
}
export const AppConfigService = new InjectionToken<AppConfig>('AppConfig')

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPageRoutingModule,
    CwsSharedLibModule
  ],
  declarations: [CustomPageComponent]
})


export class CustomPageModule {
  static forRoot(config: AppConfig): ModuleWithProviders<CustomPageModule> {
    return {
      ngModule: CustomPageModule,
      providers: [
        CustomPageService, {
          provide: AppConfigService,
          useValue: config
        }
      ]
    }
  }
}
