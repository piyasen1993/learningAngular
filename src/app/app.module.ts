import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { TestrouteComponent } from './routetest.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { NewdirectiveDirective } from './newdirective.directive';
import { CustompipePipe } from './custompipe.pipe';
import { DivdirectiveDirective } from './divdirective.directive';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  //{ path: 'landing', component: AppComponent },
  { path: 'form', component: FormComponent },
  { path: 'test', component: TestrouteComponent},
  { path: '',   redirectTo: '/form', pathMatch: 'full' },
  { path: '**', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewdirectiveDirective,
    DivdirectiveDirective,
    CustompipePipe,
    TestrouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
