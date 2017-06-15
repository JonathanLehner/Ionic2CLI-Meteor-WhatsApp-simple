import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPictureComponent } from './show-picture';

@NgModule({
  declarations: [
    ShowPictureComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShowPictureComponent),
  ],
  exports: [
    ShowPictureComponent
  ]
})
export class ShowPictureComponentModule {}
