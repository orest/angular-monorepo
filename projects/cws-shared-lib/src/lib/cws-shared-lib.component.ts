import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cws-shared-c',
  template: `
    <p>
    <ion-card>
  <ion-item>

    <ion-label>ion-item in a card, button right</ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-card-content>
    This is content, without any paragraph or header tags,
    within an ion-card-content element.
  </ion-card-content>
</ion-card>
    </p>
  `,
  styles: [
  ]
})
export class CwsSharedLibComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
