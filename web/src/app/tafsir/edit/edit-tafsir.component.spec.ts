import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTafsirComponent } from './edit-tafsir.component';

describe('EditTafsirComponent', () => {
  let component: EditTafsirComponent;
  let fixture: ComponentFixture<EditTafsirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTafsirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTafsirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
