import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsOptionsComponent } from './chatoptions';

@NgModule({
  declarations: [
    ChatsOptionsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatsOptionsComponent),
  ],
  exports: [
    ChatsOptionsComponent
  ]
})
export class ChatoptionsPageModule {}
