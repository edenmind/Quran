import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Surah } from '../../models/surah';
import { SurahService } from '../surah.service';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css'],
})
export class SurahComponent implements OnInit, OnDestroy {
  surahId!: string;
  surah!: Surah;
  private subscription: Subscription = new Subscription();

  constructor(
    private actRoute: ActivatedRoute,
    private surahService: SurahService
  ) {}

  ngOnInit(): void {
    this.surahId = this.actRoute.snapshot.params.surahId;
    this.subscription = this.surahService
      .getSurah(this.surahId)
      .subscribe((surah) => (this.surah = surah));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroys');
  }
}
