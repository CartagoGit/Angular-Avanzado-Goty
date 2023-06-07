import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IJuegos } from '../interfaces/juegos.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GotyService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  public getNominados(): Observable<IJuegos[]> {
    return this._http.get<IJuegos[]>(`${this._apiUrl}/get-goty`);
  }
}
