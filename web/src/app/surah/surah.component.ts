import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Surah } from '../models/surah';
import { SurahService } from './surah.service';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css'],
})
export class SurahComponent implements OnInit {
  surahId!: string;
  surah!: Surah;

  constructor(
    private actRoute: ActivatedRoute,
    private surahService: SurahService,
    private subscription: Subscription
  ) {}

  ngOnInit(): void {
    this.surahId = this.actRoute.snapshot.params.surahId;
    this.subscription = this.surahService
      .getSurah(this.surahId)
      .subscribe((surah) => (this.surah = surah));
  }
}
