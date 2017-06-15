import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationMessageComponent } from './location-messages';

@NgModule({
  declarations: [
    LocationMessageComponent,
  ],
  imports: [
    IonicPageModule.forChild(LocationMessageComponent),
  ],
  exports: [
    LocationMessageComponent
  ]
})
export class LocationMessagesComponentModule {}
