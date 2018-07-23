import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras} from '@angular/router';
import { Router } from '@angular/router';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  baseCategories: any = [];
  childCategoryList: any[] = [];
  constructor(private testService: TestService,
  private activatedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {

    this.testService.getBaseCategoryList().subscribe((cats) => {
      this.baseCategories = cats;
    });

    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.testService.getChildCategories(param.c).subscribe((chilcat) => {
        this.childCategoryList = chilcat;
        console.log('childcat', chilcat);
      });
    });
  }

  navigateToChild(item) {
    const extras: NavigationExtras = {queryParams : {c: item}};
    this.router.navigate(['/childcategory'], extras);
  }

}
