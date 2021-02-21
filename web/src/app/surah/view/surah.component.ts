import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as delay from 'delay';
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
  subscription: Subscription = new Subscription();
  public loaded: boolean = false;

  constructor(

    @Inject(DOCUMENT) private document: Document,
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
      .subscribe((surah) => ((this.surah = surah), (this.loaded = true), console.log("loading...")));
    this.scrollTo()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroys');
  }



  async scrollTo() {

    await delay(1000);
    this.actRoute.fragment.subscribe((fragment: string) => {
      var x = this.document.getElementById(fragment);
      x?.scrollIntoView();
    })
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
