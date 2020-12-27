import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AyahEditComponent } from './ayah/edit/ayah-edit.component';
import { AyahComponent } from './ayah/view/ayah.component';
import { HomeComponent } from './home/home.component';
import { SurahComponent } from './surah/view/surah.component';
import { TafsirComponent } from './tafsir/view/tafsir.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'surah/:surahId', component: SurahComponent },
  { path: 'ayah/edit/:ayahId', component: AyahEditComponent },
  { path: 'ayah/:ayahId', component: AyahComponent },
  { path: 'tafsir/:tafsirId', component: TafsirComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
