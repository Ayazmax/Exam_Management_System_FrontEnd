import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpostsiComponent } from './mpostsi.component';

describe('MpostsiComponent', () => {
  let component: MpostsiComponent;
  let fixture: ComponentFixture<MpostsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpostsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpostsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
