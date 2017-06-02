import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {LoginProvider} from "../login/login";
import firebase from 'firebase';
import {Tarefa} from "../../model/tarefa";

@Injectable()
export class TarefasProvider {

  reference;

  constructor(public http: Http,
              public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/tarefa/');
  }

  save(tarefa:Tarefa){
    let refKey;
    if(tarefa.keyReference != undefined){
      //update
      refKey = tarefa.keyReference;
    } else {
      // insert
      refKey = this.reference.push().key;
      tarefa.keyReference = refKey;
    }
    this.reference.child(refKey).update(tarefa);
  }

  deletar(tarefa:Tarefa):any{
    return this.reference.child(tarefa.keyReference).remove();
  }
}
