import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtradeComponent } from './vtrade.component';

describe('VtradeComponent', () => {
  let component: VtradeComponent;
  let fixture: ComponentFixture<VtradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
