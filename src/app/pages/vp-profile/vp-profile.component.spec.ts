import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpProfileComponent } from './vp-profile.component';

describe('VpProfileComponent', () => {
  let component: VpProfileComponent;
  let fixture: ComponentFixture<VpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
