import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadvisorComponent } from './fadvisor.component';

describe('FadvisorComponent', () => {
  let component: FadvisorComponent;
  let fixture: ComponentFixture<FadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadvisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
