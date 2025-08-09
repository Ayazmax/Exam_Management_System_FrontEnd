import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProfileDialogComponent } from './business-profile-dialog.component';

describe('BusinessProfileDialogComponent', () => {
  let component: BusinessProfileDialogComponent;
  let fixture: ComponentFixture<BusinessProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessProfileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
