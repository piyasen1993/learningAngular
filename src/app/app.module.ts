import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { NewdirectiveDirective } from './newdirective.directive';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewdirectiveDirective,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
