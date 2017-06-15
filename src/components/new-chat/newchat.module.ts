import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChatComponent } from './newchat';

@NgModule({
  declarations: [
    NewChatComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewChatComponent),
  ],
  exports: [
    NewChatComponent
  ]
})
export class NewchatPageModule {}
