import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ayah } from 'src/app/models/ayah';
import { Tafsir } from 'src/app/models/tafsir';
import { TafsirService } from '../tafsir.service';
import { TafsirComponent } from '../view/tafsir.component';

@Component({
  selector: 'app-add-tafsir',
  templateUrl: './add-tafsir.component.html',
  styleUrls: ['./add-tafsir.component.css'],
})
export class AddTafsirComponent implements OnInit {
  @Input()
  ayahId!: number;
  tafsir: Tafsir = {
    ayahId: undefined,
    tafsirId: undefined,
    text: '',
  };

  constructor(
    private tafsirService: TafsirService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  addTafsir() {
    this.tafsir.ayahId = this.ayahId;
    this.tafsirService.addTafsir(this.tafsir);
    this.openSnackBar('The tafsir was updated!', 'MashaAllah');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
