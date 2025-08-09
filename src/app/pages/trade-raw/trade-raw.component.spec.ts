import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeRawComponent } from './trade-raw.component';

describe('TradeRawComponent', () => {
  let component: TradeRawComponent;
  let fixture: ComponentFixture<TradeRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeRawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
