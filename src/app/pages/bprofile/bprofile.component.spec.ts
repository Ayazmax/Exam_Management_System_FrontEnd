import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BprofileComponent } from './bprofile.component';

describe('BprofileComponent', () => {
  let component: BprofileComponent;
  let fixture: ComponentFixture<BprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
