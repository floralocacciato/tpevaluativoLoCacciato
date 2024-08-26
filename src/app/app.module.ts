import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//vinculacion/importacion con firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; // Es para el Cloud Firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Es para la Autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Es para la BD de archivos e imágenes


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig), // Es para el Cloud Firestore
    //autentificacion
    AngularFireAuthModule,
    //almacenamiento de archivos e imágenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
