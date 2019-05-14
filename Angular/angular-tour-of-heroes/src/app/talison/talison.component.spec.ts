import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalisonComponent } from './talison.component';

describe('TalisonComponent', () => {
  let component: TalisonComponent;
  let fixture: ComponentFixture<TalisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
