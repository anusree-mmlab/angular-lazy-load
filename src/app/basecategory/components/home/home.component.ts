import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private baseCategories: any[] = [];

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getBaseCategoryList().subscribe((cats) => {
      this.baseCategories = cats;
      console.log('base cats', cats);
    });
  }

}
