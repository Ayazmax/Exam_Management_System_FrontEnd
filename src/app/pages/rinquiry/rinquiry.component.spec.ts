import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinquiryComponent } from './rinquiry.component';

describe('RinquiryComponent', () => {
  let component: RinquiryComponent;
  let fixture: ComponentFixture<RinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinquiryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
