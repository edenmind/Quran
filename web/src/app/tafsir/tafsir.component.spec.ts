import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafsirComponent } from './tafsir.component';

describe('TafsirComponent', () => {
  let component: TafsirComponent;
  let fixture: ComponentFixture<TafsirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TafsirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TafsirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
