import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TafsirComponent } from './tafsir/view/tafsir.component';
import { AyahComponent } from './ayah/view/ayah.component';
import { SurahComponent } from './surah/view/surah.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AyahEditComponent } from './ayah/edit/ayah-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { AddTafsirComponent } from './tafsir/add/add-tafsir.component';
import { AboutComponent } from './about/about.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditTafsirComponent } from './tafsir/edit/edit-tafsir.component';

@NgModule({
  declarations: [
    AppComponent,
    TafsirComponent,
    AyahComponent,
    SurahComponent,
    NavigationComponent,
    HomeComponent,
    AyahEditComponent,
    AddTafsirComponent,
    AboutComponent,
    EditTafsirComponent,
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
