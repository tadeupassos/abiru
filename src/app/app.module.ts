import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbbasPage } from '../pages/abbas/abbas';
import { VegetaisPage } from '../pages/vegetais/vegetais';
import { FrutasPage } from '../pages/frutas/frutas';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { ServicosProvider } from '../providers/servicos/servicos';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VegetaisPage,
    FrutasPage,
    AbbasPage,
    CarrinhoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VegetaisPage,
    FrutasPage,
    AbbasPage,
    CarrinhoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicosProvider
  ]
})
export class AppModule {}
