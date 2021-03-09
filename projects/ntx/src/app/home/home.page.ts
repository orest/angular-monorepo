import { Component } from '@angular/core';
import { CwsSharedLibService } from 'cws-shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = null;
  constructor(private sharedService: CwsSharedLibService) {

  }

  getData() {
    this.sharedService.getData().subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

}
