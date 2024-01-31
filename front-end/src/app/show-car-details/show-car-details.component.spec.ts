import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarDetailsComponent } from './show-car-details.component';

describe('ShowCarDetailsComponent', () => {
  let component: ShowCarDetailsComponent;
  let fixture: ComponentFixture<ShowCarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCarDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
