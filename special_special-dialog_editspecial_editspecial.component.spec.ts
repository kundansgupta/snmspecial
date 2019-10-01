import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspecialComponent } from './editspecial.component';

describe('EditspecialComponent', () => {
  let component: EditspecialComponent;
  let fixture: ComponentFixture<EditspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
