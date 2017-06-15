import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesAttachmentsComponent } from './messages-attachments';

@NgModule({
  declarations: [
    MessagesAttachmentsComponent,
  ],
  imports: [
    IonicPageModule.forChild(MessagesAttachmentsComponent),
  ],
  exports: [
    MessagesAttachmentsComponent
  ]
})
export class MessagesAttachmentsComponentModule {}
