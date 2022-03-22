import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeConfirmeEcoleComponent } from './detail-demande-confirme-ecole.component';

describe('DetailDemandeConfirmeEcoleComponent', () => {
  let component: DetailDemandeConfirmeEcoleComponent;
  let fixture: ComponentFixture<DetailDemandeConfirmeEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDemandeConfirmeEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeConfirmeEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
