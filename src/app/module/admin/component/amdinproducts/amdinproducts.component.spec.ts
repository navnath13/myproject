import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinproductsComponent } from './amdinproducts.component';

describe('AmdinproductsComponent', () => {
  let component: AmdinproductsComponent;
  let fixture: ComponentFixture<AmdinproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdinproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdinproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
