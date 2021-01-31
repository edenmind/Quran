import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Tafsir } from '../models/tafsir';

@Injectable({
  providedIn: 'root',
})
export class TafsirService {

  private tafsirUrl = environment.api + 'tafsir';
  constructor(private http: HttpClient) { }

  getTafsir(tafsirId: string): Observable<Tafsir> {
    return this.http.get<Tafsir>(this.tafsirUrl + '/' + tafsirId);
  }
  addTafsir(tafsir: Tafsir) {
    return this.http.post<Tafsir>(this.tafsirUrl, tafsir).subscribe();
  }
  updateTafsir(tafsir: Tafsir) {
    var putUrl = this.tafsirUrl + '/' + tafsir.tafsirId;
    console.log(putUrl);
    this.http.put<Tafsir>(putUrl, tafsir).subscribe();
  }
  removeTafsir(tafsirId: number) {
    this.http
      .delete<Tafsir>(this.tafsirUrl + '/' + tafsirId.toString())
      .subscribe();
  }
}
