import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTafsirComponent } from './add-tafsir.component';

describe('AddTafsirComponent', () => {
  let component: AddTafsirComponent;
  let fixture: ComponentFixture<AddTafsirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTafsirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTafsirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
