import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss'],
})
export class GraficoBarraHorizontalComponent {
  // ANCHOR : Properties
  public results: { name: string; value: number }[] = [
    {
      name: 'Juego 1',
      value: 0,
    },
    {
      name: 'Juego 2',
      value: 0,
    },
    {
      name: 'Juego 3',
      value: 0,
    },
    {
      name: 'Juego 4',
      value: 0,
    },
  ];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Juegos';
  public showYAxisLabel = true;
  public yAxisLabel = 'Votos';

  public colorScheme = 'nightLights';

  private _intervalo!: NodeJS.Timer;

  // ANCHOR : Constructor
  constructor() {
    this._crearResultadosAleatorios();
  }

  ngOnDestroy(): void {
    clearInterval(this._intervalo);
  }

  // ANCHOR : Methods

  private _crearResultadosAleatorios() {
    this._intervalo = setInterval(() => {
      console.log('tick');
      let auxList = [...this.results];
      for (let i in auxList) {
        const random = Math.round(Math.random() * 500);
        auxList[i].value = random;
      }
      this.results = [...auxList];
    }, 2000);
  }

  public onSelect(event: any): void {
    console.log(event);
  }
}
