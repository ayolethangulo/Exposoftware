import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======

>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectoRegistroComponent } from './inscripcion/proyecto-registro/proyecto-registro.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { LoginLiderProyectoComponent } from './login-lider-proyecto/login-lider-proyecto.component';
import { LoginComiteEvaluadorComponent } from './login-comite-evaluador/login-comite-evaluador.component';
import { LoginDocenteEvaluadorComponent } from './login-docente-evaluador/login-docente-evaluador.component';
import { InformacionComponent } from './informacion/informacion/informacion.component';
=======
import { DocenteRegistroComponent } from './inscripcion/docente-registro/docente-registro.component';
import { EstudianteRegistroComponent } from './inscripcion/estudiante-registro/estudiante-registro.component';
import { DocenteService } from './services/docente.service';
import { EstudianteService } from './services/estudiante.service';
import { ProyectoService } from './services/proyecto.service';
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FooterComponent,
    ProyectoRegistroComponent,
<<<<<<< HEAD
    LoginLiderProyectoComponent,
    LoginComiteEvaluadorComponent,
    LoginDocenteEvaluadorComponent,
    InformacionComponent
=======
    DocenteRegistroComponent,
    EstudianteRegistroComponent
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
<<<<<<< HEAD
  providers: [],
=======
  providers: [
    DocenteService,
    EstudianteService,
    ProyectoService
  ],
>>>>>>> 263e3fb76fb00cc3f8b3e4293fb6d4a78ff281da
  bootstrap: [AppComponent]
})
export class AppModule { }
