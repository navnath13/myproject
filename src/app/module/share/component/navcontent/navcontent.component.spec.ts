import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcontentComponent } from './navcontent.component';

describe('NavcontentComponent', () => {
  let component: NavcontentComponent;
  let fixture: ComponentFixture<NavcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
