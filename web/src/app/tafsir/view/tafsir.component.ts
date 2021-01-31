import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Tafsir } from 'src/app/models/tafsir';
import { TafsirService } from '../tafsir.service';

@Component({
  selector: 'app-tafsir',
  templateUrl: './tafsir.component.html',
  styleUrls: ['./tafsir.component.css'],
})
export class TafsirComponent implements OnInit {
  @Input()
  tafsirs!: Tafsir[];
  constructor(
    private tafsirService: TafsirService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  ngUpdate(): void {

  }

  public removeTafsir(tafsirId: number) {
    this.tafsirService.removeTafsir(tafsirId);
    this.openSnackBar('The tafsir was removed!', 'MashaAllah');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
