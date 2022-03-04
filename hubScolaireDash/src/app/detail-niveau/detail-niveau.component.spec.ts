import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNiveauComponent } from './detail-niveau.component';

describe('DetailNiveauComponent', () => {
  let component: DetailNiveauComponent;
  let fixture: ComponentFixture<DetailNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
