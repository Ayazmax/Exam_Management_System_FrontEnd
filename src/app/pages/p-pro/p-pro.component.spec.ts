import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PProComponent } from './p-pro.component';

describe('PProComponent', () => {
  let component: PProComponent;
  let fixture: ComponentFixture<PProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
