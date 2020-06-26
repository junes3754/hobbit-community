import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbmerFormComponent } from './mbmer-form.component';

describe('MbmerFormComponent', () => {
  let component: MbmerFormComponent;
  let fixture: ComponentFixture<MbmerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbmerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
