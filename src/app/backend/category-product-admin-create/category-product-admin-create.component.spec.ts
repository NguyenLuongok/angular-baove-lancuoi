import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductAdminCreateComponent } from './category-product-admin-create.component';

describe('CategoryProductAdminCreateComponent', () => {
  let component: CategoryProductAdminCreateComponent;
  let fixture: ComponentFixture<CategoryProductAdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductAdminCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
