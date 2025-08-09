import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuprofileComponent } from './vuprofile.component';

describe('VuprofileComponent', () => {
  let component: VuprofileComponent;
  let fixture: ComponentFixture<VuprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
