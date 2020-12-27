import { Component, Input, OnInit } from '@angular/core';
import { Ayah } from 'src/app/models/ayah';
import { AyahService } from '../ayah.service';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-ayah',
  templateUrl: './ayah.component.html',
  styleUrls: ['./ayah.component.css'],
})
export class AyahComponent implements OnInit {
  @Input()
  ayah!: Ayah;
  swedishTextWithReferences!: SafeHtml;
  constructor(
    private ayahService: AyahService,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {}

  openDialog() {
    console.log('test');
    this.dialog.open(TafsirDialog);
  }

  ngOnInit(): void {
    this.swedishTextWithReferences = this.parseReferences(this.ayah.swedish);
  }

  public parseReferences(textToParse: string): SafeHtml {
    var toReplaceWith =
      '<span style="font-size: 75%; vertical-align: super; cursor: help" title="' +
      this.ayah.tafsirs[1].text +
      '">1</span>';
    var parsed = textToParse.replace('1', toReplaceWith);

    var bypassed = this.sanitizer.bypassSecurityTrustHtml(parsed);
    return bypassed;
  }
}

@Component({
  selector: 'tafsir-dialog',
  templateUrl: './tafsir-dialog.html',
})
export class TafsirDialog {}
