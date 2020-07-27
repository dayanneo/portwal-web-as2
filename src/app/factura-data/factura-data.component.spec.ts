import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDataComponent } from './factura-data.component';

describe('FacturaDataComponent', () => {
  let component: FacturaDataComponent;
  let fixture: ComponentFixture<FacturaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
