import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CwsSharedLibComponent } from './cws-shared-lib.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule } from '@ionic/angular'
import { CwsSharedLibService } from './cws-shared-lib.service';

export interface LibConfig {
  appUrl: string
}
export const LibConfigService = new InjectionToken<LibConfig>('LibConfig')

@NgModule({
  declarations: [CwsSharedLibComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  exports: [CwsSharedLibComponent]
})
export class CwsSharedLibModule {
  static forRoot(config: LibConfig): ModuleWithProviders<CwsSharedLibModule> {
    return {
      ngModule: CwsSharedLibModule,
      providers: [
        CwsSharedLibService, {
          provide: LibConfigService,
          useValue: config
        }
      ]
    }
  }
}
