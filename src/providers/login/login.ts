import {Injectable, EventEmitter, NgZone} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Credencial} from "../../model/credencial";
import firebase from 'firebase';

@Injectable()
export class LoginProvider {

  currentUser:any;
  autenticado:boolean;
  loginSucessoEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;

  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSucessoEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario => {
      this.callBackStateChange(usuario);
    })
  }

  private callBackStateChange(usuario) {
    this.ngZone.run(() => {
        if(usuario == null){
          this.currentUser = null;
          this.autenticado = false;
        } else {
          this.currentUser = usuario;
          this.autenticado = true;
        }
    })
  }

  loginComCredencial(credencial:Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
      .then(resultado => this.callBackSucessoLogin(resultado))
      .catch(error => this.callBackFalhaLogin(error))
    //console.log(credencial);
  }

  loginComFacebook(){
    //noinspection TypeScriptUnresolvedFunction
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callBackSucessoLogin(resultado))
      .catch(error => this.callBackFalhaLogin(error));
  }
  loginComGoogle(){
    //noinspection TypeScriptUnresolvedFunction
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callBackSucessoLogin(resultado))
      .catch(error => this.callBackFalhaLogin(error));
  }

  registrarUsuario(credencial:Credencial){
  firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

  sair(){
    firebase.auth().signOut()
      .then(()=> this.logoutEventEmitter.emit(true))
      .catch(error => this.callBackFalhaLogin(error))
  }
  private callBackSucessoLogin(response){
    this.loginSucessoEventEmitter.emit(response.user);
  }

  private callBackFalhaLogin(error){
    this.loginFalhaEventEmitter.emit({code: error.code, message: error.message, email: error.email, credencial: error.credencial});
  }
}
