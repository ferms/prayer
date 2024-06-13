import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLatinComponent } from './org-latin.component';

describe('OrgLatinComponent', () => {
  let component: OrgLatinComponent;
  let fixture: ComponentFixture<OrgLatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgLatinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgLatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
