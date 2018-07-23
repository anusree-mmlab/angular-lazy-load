import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './routing.module';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
