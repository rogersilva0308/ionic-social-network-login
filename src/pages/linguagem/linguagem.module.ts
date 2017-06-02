import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinguagemPage } from './linguagem';

@NgModule({
  declarations: [
    LinguagemPage,
  ],
  imports: [
    IonicPageModule.forChild(LinguagemPage),
  ],
  exports: [
    LinguagemPage
  ]
})
export class LinguagemPageModule {}
