import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreEstructuraComponent } from './empre-estructura.component';

describe('EmpreEstructuraComponent', () => {
  let component: EmpreEstructuraComponent;
  let fixture: ComponentFixture<EmpreEstructuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreEstructuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
