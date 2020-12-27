import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SurahService } from '../surah/surah.service';
import { Surah } from '../models/surah';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  surahs: Surah[] = [];

  subscription: Subscription = new Subscription();

  color: ThemePalette = 'accent';
  checkedAR = true;
  checkedSV = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private surahService: SurahService
  ) {}
  ngOnInit(): void {
    this.subscription = this.surahService
      .getSurahs()
      .subscribe((surahs) => (this.surahs = surahs));
  }
}
