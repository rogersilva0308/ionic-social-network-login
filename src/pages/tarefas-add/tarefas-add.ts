import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {LovProvider} from "../../providers/lov/lov";
import {TarefasProvider} from "../../providers/tarefas/tarefas";
import {EstadoTarefa} from "../../model/EstadoTarefa";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa:Tarefa;
  tarefaForm:FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefasProvder:TarefasProvider,
              public viewCtrl: ViewController,
              public lovProvider:LovProvider,
              public fb: FormBuilder) {
    this.initialize();
  }

  private initialize(){
    this.tarefa = new Tarefa();
    this.tarefaForm = null;
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }
    this.tarefaForm = this.fb.group({
      'titulo' : ['',Validators.compose([Validators.required, Validators.minLength(5)])],
      'descricao' : ['',Validators.required],
      'state' : ['',Validators.required]
    });
  }
  ionViewDidLoad() {

  }

  salvarTarefa(){
    this.tarefasProvder.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

  getEstadoValue(estadoTarefa: EstadoTarefa):string{
    return EstadoTarefa[estadoTarefa];
  }
}
