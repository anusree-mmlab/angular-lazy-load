import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  childCategoryList: any[] = [];
  constructor(private testService: TestService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.testService.getChildCategories(param.c).subscribe((chilcat) => {
        this.childCategoryList = chilcat;
        console.log('childcat', chilcat);
      });
    });
  }

}
