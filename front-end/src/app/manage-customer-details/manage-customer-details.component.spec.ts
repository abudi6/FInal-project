import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerDetailsComponent } from './manage-customer-details.component';

describe('ManageCustomerDetailsComponent', () => {
  let component: ManageCustomerDetailsComponent;
  let fixture: ComponentFixture<ManageCustomerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCustomerDetailsComponent]
    });
    fixture = TestBed.createComponent(ManageCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
