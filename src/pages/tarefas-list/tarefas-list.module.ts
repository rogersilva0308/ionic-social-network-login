import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasListPage } from './tarefas-list';

@NgModule({
  declarations: [
    TarefasListPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasListPage),
  ],
  exports: [
    TarefasListPage
  ]
})
export class TarefasListPageModule {}
