import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tafsir } from 'src/app/models/tafsir';
import { TafsirService } from '../tafsir.service';

@Component({
  selector: 'app-edit-tafsir',
  templateUrl: './edit-tafsir.component.html',
  styleUrls: ['./edit-tafsir.component.css']
})
export class EditTafsirComponent implements OnInit {

  tafsir!: Tafsir;
  tafsirId!: string;
  subscription: Subscription = new Subscription();

  constructor(private tafsirService: TafsirService,

    private actRoute: ActivatedRoute,
    private route: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tafsirId = this.actRoute.snapshot.params.tafsirId;
    this.subscription = this.tafsirService
      .getTafsir(this.tafsirId)
      .subscribe((tafsir) => ((this.tafsir = tafsir)));
  }

  public updateTafsir() {
    this.tafsirService.updateTafsir(this.tafsir);
    this.openSnackBar('The tafsir was updated!', 'MashaAllah');
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }
}
