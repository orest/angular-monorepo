import { Component, OnInit } from '@angular/core';
import { CustomPageService } from './custom-page.service';

@Component({
  selector: 'cws-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent implements OnInit {

  constructor(private pageService: CustomPageService) { }

  ngOnInit(): void {
  }

  getData() {
    return this.pageService.getData().subscribe((result) => {


    })
  }

}
