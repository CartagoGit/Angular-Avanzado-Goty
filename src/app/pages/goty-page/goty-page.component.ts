import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { IJuegos } from 'src/app/interfaces/juegos.interface';
import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-goty-page',
  templateUrl: './goty-page.component.html',
  styleUrls: ['./goty-page.component.scss'],
})
export class GotyPageComponent {
  public juegos: WritableSignal<IJuegos[] | undefined> = signal<
    IJuegos[] | undefined
  >(undefined);

  constructor(private _gotySvc: GotyService) {}

  ngOnInit(): void {
    this._gotySvc.getNominados().subscribe((data) => {
      this.juegos.set(data);
    });
  }

  public votar(juego: IJuegos): void {
    console.log('votado');
  }
}
