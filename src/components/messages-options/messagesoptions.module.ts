import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesOptionsComponent } from './messagesoptions';

@NgModule({
  declarations: [
    MessagesOptionsComponent,
  ],
  imports: [
    IonicPageModule.forChild(MessagesOptionsComponent),
  ],
  exports: [
    MessagesOptionsComponent
  ]
})
export class MessagesoptionsComponentModule {}
