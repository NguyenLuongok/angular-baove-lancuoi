import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateAdminComponent } from './product-update-admin.component';

describe('ProductUpdateAdminComponent', () => {
  let component: ProductUpdateAdminComponent;
  let fixture: ComponentFixture<ProductUpdateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
