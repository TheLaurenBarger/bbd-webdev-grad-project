import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// WebPage Components
// Note: These import strings are made simpler by our added index.ts files per component
import { DisplayWarriorComponent } from './display-warrior';
import { LoginComponent } from './login';
import { EditWarriorComponent } from './edit-warrior';

@NgModule({
  declarations: [
    AppComponent,
    DisplayWarriorComponent,
    LoginComponent,
    EditWarriorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
