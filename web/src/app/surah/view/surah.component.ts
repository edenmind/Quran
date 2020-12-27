import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
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
  subscription: Subscription = new Subscription();
  public loaded: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private surahService: SurahService,
    private route: Router
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.surahId = this.actRoute.snapshot.params.surahId;
    this.subscription = this.surahService
      .getSurah(this.surahId)
      .subscribe((surah) => ((this.surah = surah), (this.loaded = true)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroys');
  }

  placeForRelevation(place: number): string {
    var placeInText = '';
    if (place == 0) {
      placeInText = 'Mecka';
    } else {
      placeInText = 'Medina';
    }

    return placeInText;
  }
}
