import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookridePage } from './bookride';

@NgModule({
  declarations: [
    BookridePage,
  ],
  imports: [
    IonicPageModule.forChild(BookridePage),
  ],
})
export class BookridePageModule {}
