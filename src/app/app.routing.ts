import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { GotyPageComponent } from './pages/goty-page/goty-page.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioPageComponent
  },
  {
    path: 'goty', component: GotyPageComponent
  },
  {
    path: '**', redirectTo: '/inicio', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
