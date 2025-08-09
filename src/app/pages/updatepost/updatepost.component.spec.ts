import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostComponent } from './updatepost.component';

describe('UpdatepostComponent', () => {
  let component: UpdatePostComponent;
  let fixture: ComponentFixture<UpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
