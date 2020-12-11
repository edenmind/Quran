import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Ayah } from '../models/ayah';

@Injectable({
  providedIn: 'root',
})
export class AyahService {
  private ayahUrl = 'https://localhost:5001/api/ayah';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  private addOnClickForTafsir(swedishText: string): String {
    return 'string';
  }

  getAyah(ayahId: string): Observable<Ayah> {
    return this.http.get<Ayah>(this.ayahUrl + '/' + ayahId);
  }

  updateAyah(ayah: Ayah) {
    var putUrl = this.ayahUrl + '/' + ayah.ayahId;
    console.log(putUrl);
    this.http.put<Ayah>(putUrl, ayah).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`TextService: ${message}`);
  }
}
