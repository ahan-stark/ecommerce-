import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualProductItemsComponent } from './individual-product-items.component';

describe('IndividualProductItemsComponent', () => {
  let component: IndividualProductItemsComponent;
  let fixture: ComponentFixture<IndividualProductItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualProductItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualProductItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
