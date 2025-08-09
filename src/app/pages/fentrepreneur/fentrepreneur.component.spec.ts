import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FentrepreneurComponent } from './fentrepreneur.component';

describe('FentrepreneurComponent', () => {
  
  let component: FentrepreneurComponent;
  let fixture: ComponentFixture<FentrepreneurComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [FentrepreneurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FentrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
