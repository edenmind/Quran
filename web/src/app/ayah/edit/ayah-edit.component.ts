import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ayah } from 'src/app/models/ayah';
import { AyahService } from '../ayah.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ayah-edit',
  templateUrl: './ayah-edit.component.html',
  styleUrls: ['./ayah-edit.component.css'],
})
export class AyahEditComponent implements OnInit {
  ayahId!: string;
  ayah!: Ayah;
  private subscription: Subscription = new Subscription();

  constructor(
    private ayahService: AyahService,
    private actRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ayahId = this.actRoute.snapshot.params.ayahId;
    this.subscription = this.ayahService
      .getAyah(this.ayahId)
      .subscribe((ayah) => (this.ayah = ayah));
  }

  public updateAyah() {
    this.ayahService.updateAyah(this.ayah);
    this.openSnackBar('The ayah was updated!', 'MashaAllah');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
