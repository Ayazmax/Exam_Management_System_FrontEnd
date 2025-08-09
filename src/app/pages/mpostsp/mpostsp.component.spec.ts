import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpostspComponent } from './mpostsp.component';

describe('MpostspComponent', () => {
  let component: MpostspComponent;
  let fixture: ComponentFixture<MpostspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpostspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpostspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
