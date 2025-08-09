import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInqueryAdminComponent } from './view-inquery-admin.component';

describe('ViewInqueryAdminComponent', () => {
  let component: ViewInqueryAdminComponent;
  let fixture: ComponentFixture<ViewInqueryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInqueryAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInqueryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
