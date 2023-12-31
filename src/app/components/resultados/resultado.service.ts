import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private http: HttpClient) { }

  getPokemonById(Id: number): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${Id}`);
  }
}
