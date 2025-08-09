import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsnavbarComponent } from './lsnavbar.component';

describe('LsnavbarComponent', () => {
  let component: LsnavbarComponent;
  let fixture: ComponentFixture<LsnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
