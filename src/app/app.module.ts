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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  //{ path: 'landing', component: AppComponent },
  { path: 'form', component: FormComponent },
  { path: 'test/:id', component: TestrouteComponent},
  { path: 'home/:id/:usertype', component: HomePageComponent},
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: '',  component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewdirectiveDirective,
    DivdirectiveDirective,
    CustompipePipe,
    TestrouteComponent,
    HomePageComponent,
    LoginComponent
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
