import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import { BasecategoryRoutingModule } from './basecategory.routing.module';


@NgModule({
  imports: [
    CommonModule,
    BasecategoryRoutingModule
  ],
  declarations: [HomeComponent]
})
export class BasecategoryModule { }
