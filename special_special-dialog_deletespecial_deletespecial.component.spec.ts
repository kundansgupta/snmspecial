import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespecialComponent } from './deletespecial.component';

describe('DeletespecialComponent', () => {
  let component: DeletespecialComponent;
  let fixture: ComponentFixture<DeletespecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletespecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
