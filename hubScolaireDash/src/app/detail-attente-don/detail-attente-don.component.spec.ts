import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAttenteDonComponent } from './detail-attente-don.component';

describe('DetailAttenteDonComponent', () => {
  let component: DetailAttenteDonComponent;
  let fixture: ComponentFixture<DetailAttenteDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAttenteDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAttenteDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
