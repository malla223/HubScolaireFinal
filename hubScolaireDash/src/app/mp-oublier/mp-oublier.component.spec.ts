import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpOublierComponent } from './mp-oublier.component';

describe('MpOublierComponent', () => {
  let component: MpOublierComponent;
  let fixture: ComponentFixture<MpOublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpOublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
