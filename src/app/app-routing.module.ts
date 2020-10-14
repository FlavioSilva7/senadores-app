import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenadorDetailComponent } from './components/views/senador-detail/senador-detail.component';
import { SenadoresComponent } from './components/views/senadores/senadores.component';

const routes: Routes = [
  {
    path: '',
    component: SenadoresComponent,
  },
  {
    path: 'senador/:id',
    component: SenadorDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
