import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeConfirmeUserComponent } from './detail-demande-confirme-user.component';

describe('DetailDemandeConfirmeUserComponent', () => {
  let component: DetailDemandeConfirmeUserComponent;
  let fixture: ComponentFixture<DetailDemandeConfirmeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDemandeConfirmeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeConfirmeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
