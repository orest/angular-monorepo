import { Injectable, Inject } from '@angular/core';
import { LibConfigService, LibConfig } from './cws-shared-lib.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CwsSharedLibService {
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
