import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertrackerComponent } from './ordertracker.component';

describe('OrdertrackerComponent', () => {
  let component: OrdertrackerComponent;
  let fixture: ComponentFixture<OrdertrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdertrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdertrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
