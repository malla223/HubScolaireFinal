import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEcoleComponent } from './edit-ecole.component';

describe('EditEcoleComponent', () => {
  let component: EditEcoleComponent;
  let fixture: ComponentFixture<EditEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
