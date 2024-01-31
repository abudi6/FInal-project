import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCarDetailsComponent } from './manage-car-details.component';

describe('ManageCarDetailsComponent', () => {
  let component: ManageCarDetailsComponent;
  let fixture: ComponentFixture<ManageCarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCarDetailsComponent]
    });
    fixture = TestBed.createComponent(ManageCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
