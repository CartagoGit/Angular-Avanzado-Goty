import { Component, computed } from '@angular/core';
import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
})
export class InicioPageComponent {
  public resultados = computed(() =>
    this._gotySvc
      .juegos()
      .map((juego) => ({ name: juego.nombre, value: juego.votos }))
  );

  constructor(private _gotySvc: GotyService) {}
}
