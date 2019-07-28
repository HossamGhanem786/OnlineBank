import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBetweenComponent } from './transfer-between.component';

describe('TransferBetweenComponent', () => {
  let component: TransferBetweenComponent;
  let fixture: ComponentFixture<TransferBetweenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBetweenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
