import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputsCreateComponent } from './form-inputs-create.component';

describe('FormInputsCreateComponent', () => {
  let component: FormInputsCreateComponent;
  let fixture: ComponentFixture<FormInputsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
