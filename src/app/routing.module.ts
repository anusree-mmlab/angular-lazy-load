
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { AppComponent } from './app.component';


const appRoutes: Routes = [
    { path: '', loadChildren: './basecategory/basecategory.module#BasecategoryModule' },
    { path: 'childcategory', loadChildren: './childcategory/childcategory.module#ChildcategoryModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})

export class AppRoutesModule {

}
