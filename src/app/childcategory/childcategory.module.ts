import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';

import { ChildcategoryRoutingModule} from './childcategory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChildcategoryRoutingModule
  ],
  declarations: [CategoryComponent]
})
export class ChildcategoryModule { }
