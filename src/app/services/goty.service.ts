import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { IJuegos } from '../interfaces/juegos.interface';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GotyService {
  private _apiUrl: string = environment.apiUrl;
  public juegos: WritableSignal<IJuegos[]> = signal<IJuegos[]>([]);
  // private _firestore: Firestore = inject(Firestore);
  constructor(private _http: HttpClient, private _firestore: Firestore) {
    this._actualizarJuegosEnTiempoReal();
  }

  private _actualizarJuegosEnTiempoReal(): void {
    const aCollection = collection(this._firestore, 'goty');
    const juegos$ = collectionData(aCollection);
    juegos$.subscribe((juegos) => {
      console.log(juegos);
      this.juegos.update(() => [...(juegos as IJuegos[])]);
    });
    // this.juegos = toSignal(collectionData<IJuegos>(aCollection)) || [];
  }

  public getNominados(): Observable<IJuegos[]> {
    if (this.juegos().length !== 0) return of(this.juegos());
    return this._http.get<IJuegos[]>(`${this._apiUrl}/get-goty`);
  }

  public votarJuego(id: string): Observable<{ ok: boolean; mensaje: string }> {
    return this._http
      .post<{ ok: boolean; mensaje: string }>(
        `${this._apiUrl}/votar-goty/${id}`,
        {}
      )
      .pipe(
        catchError((resp) => {
          return of(resp.error);
        })
      );
  }
}
