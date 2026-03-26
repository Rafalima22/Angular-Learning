import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComrpasComponent } from './lista-comrpas.component';

describe('ListaComrpasComponent', () => {
  let component: ListaComrpasComponent;
  let fixture: ComponentFixture<ListaComrpasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComrpasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComrpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
