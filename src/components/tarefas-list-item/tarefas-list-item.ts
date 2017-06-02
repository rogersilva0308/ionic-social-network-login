import {Component, Input} from '@angular/core';
import {Tarefa} from "../../model/tarefa";

@Component({
  selector: 'tarefas-list-item',
  templateUrl: 'tarefas-list-item.html'
})
export class TarefasListItemComponent {

  @Input()
  tarefa:Tarefa;

}
