import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseCategory: any[] = [];
  childCategory: any = {};

  constructor() {
    this.baseCategory = ['category 1', 'category 2', 'category 3'];
    this.childCategory = {
      'category 1': [{
        name: 'child 1 of category 1',
        data: 'test data of category 1',
      },
      {
        name: 'child 2 of category 1',
        data: 'test data of category 1',
      },
      {
        name: 'child 2 of category 1',
        data: 'test data of category 1',
      },
      ],
      'category 2': [{
        name: 'child 1 of category 2',
        data: 'test data of category 2',
      },
      {
        name: 'child 2 of category 2',
        data: 'test data of category 2',
      },
      {
        name: 'child 2 of category 2',
        data: 'test data of category 2',
      },
      ],
      'category 3': [{
        name: 'child 1 of category 3',
        data: 'test data of category 3',
      },
      {
        name: 'child 2 of category 3',
        data: 'test data of category 3',
      },
      {
        name: 'child 2 of category 3',
        data: 'test data of category 3',
      },
      ],
    };
  }

  getBaseCategoryList() {
    // You have to fetch all the base categories using api call
    const baseCategory$ = Observable.create((observer) => {
      observer.next(this.baseCategory);
      observer.complete();
    });

    return baseCategory$;
  }

  getChildCategories(baseCat) {
    // You have to fetch all the child categories using api call
    const childCats = this.childCategory[baseCat];
    const childCategory$ = Observable.create((observer) => {
      observer.next(childCats);
      observer.complete();
    });

    return childCategory$;
  }
}
