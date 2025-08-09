import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fentrepreneur2Component } from './fentrepreneur2.component';

describe('Fentrepreneur2Component', () => {
  let component: Fentrepreneur2Component;
  let fixture: ComponentFixture<Fentrepreneur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fentrepreneur2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fentrepreneur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
