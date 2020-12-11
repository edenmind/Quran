import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tafsir',
  templateUrl: './tafsir.component.html',
  styleUrls: ['./tafsir.component.css'],
})
export class TafsirComponent implements OnInit {
  tafsirId: string = '1';
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tafsirId = this.actRoute.snapshot.params.tafsirId;
  }
}
