import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAttenteDonEcoleComponent } from './detail-attente-don-ecole.component';

describe('DetailAttenteDonEcoleComponent', () => {
  let component: DetailAttenteDonEcoleComponent;
  let fixture: ComponentFixture<DetailAttenteDonEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAttenteDonEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAttenteDonEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
