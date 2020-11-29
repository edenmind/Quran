import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ayah',
  templateUrl: './ayah.component.html',
  styleUrls: ['./ayah.component.css'],
})
export class AyahComponent implements OnInit {
  ayahId: string = '1';
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ayahId = this.actRoute.snapshot.params.ayahId;
  }
}
