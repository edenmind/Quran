import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Surah } from '../models/surah';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SurahService {
  constructor(private http: HttpClient) {}

  private surahUrl = environment.api + 'surah';

  getSurahs(): Observable<Surah[]> {
    return this.http.get<Surah[]>(this.surahUrl);
  }

  getSurah(surahId: string): Observable<Surah> {
    return this.http.get<Surah>(this.surahUrl + '/' + surahId);
  }
}
