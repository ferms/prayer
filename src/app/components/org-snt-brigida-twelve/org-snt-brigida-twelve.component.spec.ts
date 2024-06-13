import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSntBrigidaTwelveComponent } from './org-snt-brigida-twelve.component';

describe('OrgSntBrigidaTwelveComponent', () => {
  let component: OrgSntBrigidaTwelveComponent;
  let fixture: ComponentFixture<OrgSntBrigidaTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgSntBrigidaTwelveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgSntBrigidaTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
