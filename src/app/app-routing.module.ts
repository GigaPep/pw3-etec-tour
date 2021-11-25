import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovacaoPacoteComponent } from './aprovacao-pacote/aprovacao-pacote.component';
import { DetalhesPacoteComponent } from './detalhes-pacote/detalhes-pacote.component';
import { ListaPacotesComponent } from './lista-pacotes/lista-pacotes.component';
import { NovoPacoteComponent } from './novo-pacote/novo-pacote.component';

const routes: Routes = [
  
  {path: 'novo-pacote', component: NovoPacoteComponent},
  {path: 'aprovacao-pacote/:id', component: AprovacaoPacoteComponent},
  {path: 'detalhes-pacote/:id', component: DetalhesPacoteComponent},
  {path: 'lista-pacotes', component: ListaPacotesComponent},
  {path: '', redirectTo: 'lista-pacotes', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
