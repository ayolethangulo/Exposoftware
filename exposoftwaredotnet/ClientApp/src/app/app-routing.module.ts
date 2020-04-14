import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
<<<<<<< HEAD
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
  

=======
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
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports:[RouterModule]
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
})
export class AppRoutingModule { }
