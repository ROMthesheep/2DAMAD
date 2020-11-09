import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EJ2Page } from './ej2.page';

describe('EJ2Page', () => {
  let component: EJ2Page;
  let fixture: ComponentFixture<EJ2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EJ2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EJ2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
