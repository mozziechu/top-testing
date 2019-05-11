import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouleComponent } from './roule.component';

describe('RouleComponent', () => {
  let component: RouleComponent;
  let fixture: ComponentFixture<RouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
