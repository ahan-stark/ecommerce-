import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCartComponent } from './super-cart.component';

describe('SuperCartComponent', () => {
  let component: SuperCartComponent;
  let fixture: ComponentFixture<SuperCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
