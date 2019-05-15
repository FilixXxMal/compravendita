import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecFormComponent } from './rec-form.component';

describe('RecFormComponent', () => {
  let component: RecFormComponent;
  let fixture: ComponentFixture<RecFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
