import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss'],
})
export class GraficoBarraHorizontalComponent {
  // ANCHOR : Properties
  public results: any[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];

  public view: [number, number] = [0, 0];

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

  // ANCHOR : Constructor
  constructor() {}

  // ANCHOR : Methods
  public onSelect(event: any): void {
    console.log(event);
  }
}
