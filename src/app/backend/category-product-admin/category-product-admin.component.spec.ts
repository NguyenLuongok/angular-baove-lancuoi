import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductAdminComponent } from './category-product-admin.component';

describe('CategoryProductAdminComponent', () => {
  let component: CategoryProductAdminComponent;
  let fixture: ComponentFixture<CategoryProductAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
