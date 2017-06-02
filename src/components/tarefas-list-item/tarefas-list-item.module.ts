import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasListItemComponent } from './tarefas-list-item';

@NgModule({
  declarations: [
    TarefasListItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(TarefasListItemComponent),
  ],
  exports: [
    TarefasListItemComponent
  ]
})
export class TarefasListItemComponentModule {}
