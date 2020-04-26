import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFouldComponent } from './not-fould.component';

describe('NotFouldComponent', () => {
  let component: NotFouldComponent;
  let fixture: ComponentFixture<NotFouldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFouldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
