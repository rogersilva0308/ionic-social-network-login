import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login/login";
import {Credencial} from "../../model/credencial";
import {TarefasListPage} from "../tarefas-list/tarefas-list";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credencial: Credencial;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginProvider: LoginProvider,
              public menuCtrl: MenuController) {
    this.credencial = new Credencial();
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      //user => console.log(user)
      user => {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(TarefasListPage)
      }
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }
  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair();
  }
  doRegistrar(){
  	this.navCtrl.push(RegistrarPage);
  }

}
