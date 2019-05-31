import { Component } from '@angular/core';



@Component({
    selector: 'image-picker',
    templateUrl: 'image-picker.component.html'
  })
  export class ImagePickerComponent{
    title = 'Profile Picture';
    images = ["assets/images/male.jpg","assets/images/female.jpg","assets/images/others.jpg"];
    loadComponent = false;
  loadMyChildComponent() {
    this.loadComponent = true;
  }
}
