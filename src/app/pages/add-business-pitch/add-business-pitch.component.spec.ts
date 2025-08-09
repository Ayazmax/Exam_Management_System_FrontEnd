import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessPitchComponent } from './add-business-pitch.component';

describe('AddBusinessPitchComponent', () => {
  let component: AddBusinessPitchComponent;
  let fixture: ComponentFixture<AddBusinessPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBusinessPitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
