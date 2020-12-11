import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyahEditComponent } from './ayah-edit.component';

describe('AyahEditComponent', () => {
  let component: AyahEditComponent;
  let fixture: ComponentFixture<AyahEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyahEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyahEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
