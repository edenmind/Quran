import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Tafsir } from '../models/tafsir';

@Injectable({
  providedIn: 'root',
})
export class TafsirService {
  private tafsirUrl = environment.api + 'tafsir';
  constructor(private http: HttpClient) {}

  addTafsir(tafsir: Tafsir) {
    return this.http.post<Tafsir>(this.tafsirUrl, tafsir).subscribe();
  }
  removeTafsir(tafsirId: string) {
    this.http.delete<Tafsir>(this.tafsirUrl + '/' + tafsirId).subscribe();
  }
}
