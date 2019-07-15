import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilisateursComponent } from './list-utilisateurs.component';

describe('ListUtilisateursComponent', () => {
  let component: ListUtilisateursComponent;
  let fixture: ComponentFixture<ListUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
