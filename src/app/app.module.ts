import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';

import firebase from "firebase";
import { TarefasListItemComponent } from '../components/tarefas-list-item/tarefas-list-item';
import { TarefasProvider } from '../providers/tarefas/tarefas';
import {TarefasListPage} from "../pages/tarefas-list/tarefas-list";
import {TarefasAddPage} from "../pages/tarefas-add/tarefas-add";
import { LovProvider } from '../providers/lov/lov';
import {TranslateModule} from "ng2-translate"; // aqui não tinha

const firebaseConfig = {
  apiKey: "AIzaSyD1j17b3k14jSZqptG5qHtRDLWY2zu7W68",
  authDomain: "listador-de-tarefas-11d8a.firebaseapp.com",
  databaseURL: "https://listador-de-tarefas-11d8a.firebaseio.com",
  projectId: "listador-de-tarefas-11d8a",
  storageBucket: "listador-de-tarefas-11d8a.appspot.com",
  messagingSenderId: "24249096781"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    TarefasListItemComponent,
    TarefasListPage,
    TarefasAddPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot()  // aqui não tinha
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    TarefasListItemComponent,
    TarefasListPage,
    TarefasAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefasProvider,
    LovProvider

  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
