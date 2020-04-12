import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { DocenteRegistroComponent } from './inscripcion/docente-registro/docente-registro.component';
import { EstudianteRegistroComponent } from './inscripcion/estudiante-registro/estudiante-registro.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: 'proyectoRegistro',
  component: ProyectoRegistroComponent
  },
  {
    path: 'docenteRegistro',
    component: DocenteRegistroComponent
  },
  {
    path: 'estudianteRegistro',
    component: EstudianteRegistroComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
