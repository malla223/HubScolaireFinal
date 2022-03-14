import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileleveEcoleComponent } from './detaileleve-ecole.component';

describe('DetaileleveEcoleComponent', () => {
  let component: DetaileleveEcoleComponent;
  let fixture: ComponentFixture<DetaileleveEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileleveEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileleveEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
