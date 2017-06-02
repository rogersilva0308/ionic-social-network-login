import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasAddPage } from './tarefas-add';

@NgModule({
  declarations: [
    TarefasAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasAddPage),
  ],
  exports: [
    TarefasAddPage
  ]
})
export class TarefasAddPageModule {}
