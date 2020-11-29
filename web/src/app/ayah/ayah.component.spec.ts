import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyahComponent } from './ayah.component';

describe('AyahComponent', () => {
  let component: AyahComponent;
  let fixture: ComponentFixture<AyahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
