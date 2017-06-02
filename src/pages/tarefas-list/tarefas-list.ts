import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {TarefasProvider} from "../../providers/tarefas/tarefas";
import {TarefasAddPage} from "../tarefas-add/tarefas-add";

@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefaProvider: TarefasProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone) {
    this.tarefas = new Array();
  }

  ionViewDidLoad() {
    /*
    * value           - Escuta todas as alterações da referência
    * child_added     - Ouvinte para quando um filho for adicionado
    * child_changed   - Ouvinte para quando um filho for alterado
     * child_removed  - Ouvinte para quando um filho for deletado
     * child_moved    - Ouvinte para ouvir as mudanças na prioridade de um filho
    */

    this.tarefaProvider.reference.on('child_removed', (snapshot => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa ' + tarefaRemovida.titulo + ' removida.',
        duration: 3000
      }).present();
    }))

    this.tarefaProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAddPage, {'tarefa' : tarefa});
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAddPage, {'tarefa' : new Tarefa()});
  }

  deletarTarefa(tarefa:Tarefa){
    this.tarefaProvider.deletar(tarefa)
      .then(sucesso => console.log('Tarefa deletada.'))
      .catch(error => console.log('Não foi possível deletar a tarefa.'));
  }
}
