import { Component, WritableSignal, signal } from '@angular/core';
import { IJuegos } from 'src/app/interfaces/juegos.interface';
import { GotyService } from 'src/app/services/goty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty-page',
  templateUrl: './goty-page.component.html',
  styleUrls: ['./goty-page.component.scss'],
})
export class GotyPageComponent {
  public juegos: WritableSignal<IJuegos[]> = signal([]);

  constructor(private _gotySvc: GotyService) {}

  ngOnInit(): void {
    this._gotySvc.getNominados().subscribe((data) => {
      this.juegos.set(data);
    });
  }

  public votar(juego: IJuegos): void {
    this._gotySvc.votarJuego(juego.id).subscribe({
      next: (data) => {
        const { ok, mensaje } = data;
        if (!ok) {
          Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: '¡Voto registrado!',
            text: mensaje,
            icon: 'success',
          });
        }
      },
      // error: (error) => {
      //   Swal.fire({
      //     title: 'Error!',
      //     text: `Hubo un error al registrar el voto. Contacte con el administrador. ${error.message}`,
      //     icon: 'error',
      //   });
      // },
    });
  }
}
