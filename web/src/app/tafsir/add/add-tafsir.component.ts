import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tafsir } from 'src/app/models/tafsir';
import { TafsirService } from '../tafsir.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Ayah } from 'src/app/models/ayah';

@Component({
  selector: 'app-add-tafsir',
  templateUrl: './add-tafsir.component.html',
  styleUrls: ['./add-tafsir.component.css'],
})
export class AddTafsirComponent implements OnInit {
  @Input()
  ayah!: Ayah;
  tafsir: Tafsir = {
    ayahId: 0,
    tafsirId: 0,
    text: '',
  };

  constructor(
    private tafsirService: TafsirService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: Router

  ) {
  }

  ngOnInit(): void { }

  addTafsir() {
    this.tafsir.ayahId = this.ayah.ayahId;
    this.tafsirService.addTafsir(this.tafsir);

    var url = "/surah/" + this.ayah.surahId + "#" + this.ayah.ayahNumber;

    this.location.replaceState(url);
    window.location.reload();

    this.openSnackBar('The tafsir was updated!', 'MashaAllah');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
