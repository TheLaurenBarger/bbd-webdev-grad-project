import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule,
 MatCardModule,
 MatButtonModule,
 MatToolbarModule,
 MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModalModule } from 'ng6-bootstrap-modal';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ImagePickerComponent } from '../image-picker/image-picker.component';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [
    ImagePickerComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [CreateUserComponent]
})
export class CreateUserModule { }
