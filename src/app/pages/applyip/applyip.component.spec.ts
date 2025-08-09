import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyipComponent } from './applyip.component';

describe('ApplyipComponent', () => {
  let component: ApplyipComponent;
  let fixture: ComponentFixture<ApplyipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
