import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbprofileComponent } from './vbprofile.component';

describe('VbprofileComponent', () => {
  let component: VbprofileComponent;
  let fixture: ComponentFixture<VbprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VbprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VbprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
