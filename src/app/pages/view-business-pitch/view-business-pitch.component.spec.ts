import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusinessPitchComponent } from './view-business-pitch.component';

describe('ViewBusinessPitchComponent', () => {
  let component: ViewBusinessPitchComponent;
  let fixture: ComponentFixture<ViewBusinessPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBusinessPitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBusinessPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
