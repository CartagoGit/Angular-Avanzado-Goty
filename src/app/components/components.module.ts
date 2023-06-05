import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';

@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, GraficoBarraHorizontalComponent],
})
export class ComponentsModule {}
