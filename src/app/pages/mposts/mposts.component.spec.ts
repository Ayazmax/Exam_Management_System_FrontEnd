import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpostsComponent } from './mposts.component';

describe('MpostsComponent', () => {
  let component: MpostsComponent;
  let fixture: ComponentFixture<MpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
