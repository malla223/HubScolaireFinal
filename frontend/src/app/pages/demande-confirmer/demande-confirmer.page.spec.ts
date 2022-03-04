import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeConfirmerPage } from './demande-confirmer.page';

describe('DemandeConfirmerPage', () => {
  let component: DemandeConfirmerPage;
  let fixture: ComponentFixture<DemandeConfirmerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeConfirmerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeConfirmerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
