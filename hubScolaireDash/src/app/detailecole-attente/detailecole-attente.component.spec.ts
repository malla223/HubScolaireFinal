import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailecoleAttenteComponent } from './detailecole-attente.component';

describe('DetailecoleAttenteComponent', () => {
  let component: DetailecoleAttenteComponent;
  let fixture: ComponentFixture<DetailecoleAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailecoleAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailecoleAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
