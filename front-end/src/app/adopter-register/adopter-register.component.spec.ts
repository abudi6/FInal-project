import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterRegisterComponent } from './adopter-register.component';

describe('AdopterRegisterComponent', () => {
  let component: AdopterRegisterComponent;
  let fixture: ComponentFixture<AdopterRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopterRegisterComponent]
    });
    fixture = TestBed.createComponent(AdopterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});