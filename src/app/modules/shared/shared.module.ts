import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// componentes locales
import { FooterComponent } from './components/footer/footer.component';
import  { NavbarComponent } from './components/navbar/navbar.component';

//componentes importados de material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';

// RUTAS GENERALES DE TODOS LOS MÓDULOS
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule
  ], 
  exports: [
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
    ]
})
export class SharedModule { }
