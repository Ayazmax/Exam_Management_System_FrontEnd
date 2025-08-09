import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupgoalsComponent } from './setupgoals.component';

describe('SetupgoalsComponent', () => {
  let component: SetupgoalsComponent;
  let fixture: ComponentFixture<SetupgoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupgoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetupgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
