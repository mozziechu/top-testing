import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienticonComponent } from './clienticon.component';

describe('ClienticonComponent', () => {
  let component: ClienticonComponent;
  let fixture: ComponentFixture<ClienticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
