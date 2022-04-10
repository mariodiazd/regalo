import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCuatroComponent } from './pregunta-cuatro.component';

describe('PreguntaCuatroComponent', () => {
  let component: PreguntaCuatroComponent;
  let fixture: ComponentFixture<PreguntaCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
