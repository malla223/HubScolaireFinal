import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEcoleComponent } from './gestion-ecole.component';

describe('GestionEcoleComponent', () => {
  let component: GestionEcoleComponent;
  let fixture: ComponentFixture<GestionEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
