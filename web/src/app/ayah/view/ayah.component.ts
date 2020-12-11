import { Component, Input, OnInit } from '@angular/core';
import { Ayah } from 'src/app/models/ayah';
import { AyahService } from '../ayah.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ayah',
  templateUrl: './ayah.component.html',
  styleUrls: ['./ayah.component.css'],
})
export class AyahComponent implements OnInit {
  @Input()
  ayah!: Ayah;
  constructor(private ayahService: AyahService, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TafsirDialog);
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'tafsir-dialog',
  templateUrl: './tafsir-dialog.html',
})
export class TafsirDialog {}
