import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCartItemsComponent } from './individual-cart-items.component';

describe('IndividualCartItemsComponent', () => {
  let component: IndividualCartItemsComponent;
  let fixture: ComponentFixture<IndividualCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCartItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
