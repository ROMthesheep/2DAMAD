import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EJ1Page } from './ej1.page';

describe('EJ1Page', () => {
  let component: EJ1Page;
  let fixture: ComponentFixture<EJ1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EJ1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EJ1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
