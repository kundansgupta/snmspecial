import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSpecialComponent } from './get-special.component';

describe('GetSpecialComponent', () => {
  let component: GetSpecialComponent;
  let fixture: ComponentFixture<GetSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
