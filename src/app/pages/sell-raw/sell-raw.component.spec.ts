import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRawComponent } from './sell-raw.component';

describe('SellRawComponent', () => {
  let component: SellRawComponent;
  let fixture: ComponentFixture<SellRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellRawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
