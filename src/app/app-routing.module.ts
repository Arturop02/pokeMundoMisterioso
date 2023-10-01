import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  {path: 'start', component: InicioComponent},
  {path: 'quiz', component: PreguntasComponent},
  {path: 'poke/:result', component: ResultadosComponent},
  {path: '**', redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
