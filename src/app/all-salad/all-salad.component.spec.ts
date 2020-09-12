import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSaladComponent } from './all-salad.component';

describe('AllSaladComponent', () => {
  let component: AllSaladComponent;
  let fixture: ComponentFixture<AllSaladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSaladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
