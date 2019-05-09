import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHireModalComponent } from './plan-hire-modal.component';

describe('PlanHireModalComponent', () => {
  let component: PlanHireModalComponent;
  let fixture: ComponentFixture<PlanHireModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanHireModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanHireModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
