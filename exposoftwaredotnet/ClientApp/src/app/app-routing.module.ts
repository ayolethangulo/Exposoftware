import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginLiderProyectoComponent } from './login-lider-proyecto/login-lider-proyecto.component';
import { LoginDocenteEvaluadorComponent } from './login-docente-evaluador/login-docente-evaluador.component';
import { LoginComiteEvaluadorComponent } from './login-comite-evaluador/login-comite-evaluador.component';
import { InformacionComponent } from './informacion/informacion/informacion.component';
const routes: Routes = [
  {
    path: 'proyectoRegistro',
    component: ProyectoRegistroComponent
  },

  {
    path: 'loginLider',
    component: LoginLiderProyectoComponent

  },

  {
    path: 'LoginDocenteEvaluador',
    component: LoginDocenteEvaluadorComponent

  },

  {
    path: 'LoginComiteEvaluador',
    component: LoginComiteEvaluadorComponent

  },
  
  {
    path: 'Informacion',
    component: InformacionComponent

  }
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
