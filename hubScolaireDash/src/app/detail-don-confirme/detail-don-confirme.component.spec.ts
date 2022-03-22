import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDonConfirmeComponent } from './detail-don-confirme.component';

describe('DetailDonConfirmeComponent', () => {
  let component: DetailDonConfirmeComponent;
  let fixture: ComponentFixture<DetailDonConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDonConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDonConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
