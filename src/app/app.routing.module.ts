import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './form.component';
import { TestrouteComponent } from './routetest.component';
 
const appRoutes: Routes = [
  //{ path: 'landing', component: AppComponent },
  { path: 'form', component: FormComponent },
  { path: 'test', component: TestrouteComponent},
  { path: 'home/:user', component: HomePageComponent},
  //{ path: 'login', component: LoginComponent },
  { path: 'login' , loadChildren: '../app/pages/login/login.module#LoginModule'},
  { path: '',  component: FormComponent },
  { path: '**', redirectTo: '/form', pathMatch: 'full' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}