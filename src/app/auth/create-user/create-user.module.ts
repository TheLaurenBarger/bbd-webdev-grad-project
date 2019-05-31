import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ImagePickerComponent } from '../image-picker/image-picker.component'
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [
    ImagePickerComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [CreateUserComponent]
})
export class CreateUserModule { }
