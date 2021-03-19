import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfigService, AppConfig } from './custom-page.module';
import { LibConfig, LibConfigService } from '../cws-shared-lib.module';
@Injectable({
  providedIn: 'root'
})
export class CustomPageService {
  baseUrl = this.config.appUrl;

  constructor(@Inject(LibConfigService) private config: LibConfig, private http: HttpClient) {
    console.log("config: ", config)
  }

  getData() {
    return this.http.get<any>(`${this.baseUrl}/api`).pipe(
      map((res) => res.results[0])
    )
  }

}
