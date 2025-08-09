import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbpitchComponent } from './vbpitch.component';

describe('VbpitchComponent', () => {
  let component: VbpitchComponent;
  let fixture: ComponentFixture<VbpitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VbpitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VbpitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
