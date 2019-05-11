import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XueyuanComponent } from './xueyuan.component';

describe('XueyuanComponent', () => {
  let component: XueyuanComponent;
  let fixture: ComponentFixture<XueyuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XueyuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XueyuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
