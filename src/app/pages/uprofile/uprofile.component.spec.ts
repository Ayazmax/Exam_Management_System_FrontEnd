import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprofileComponent } from './uprofile.component';

describe('UprofileComponent', () => {
  let component: UprofileComponent;
  let fixture: ComponentFixture<UprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
