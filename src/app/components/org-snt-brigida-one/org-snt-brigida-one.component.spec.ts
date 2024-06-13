import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSntBrigidaOneComponent } from './org-snt-brigida-one.component';

describe('OrgSntBrigidaOneComponent', () => {
  let component: OrgSntBrigidaOneComponent;
  let fixture: ComponentFixture<OrgSntBrigidaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgSntBrigidaOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgSntBrigidaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
