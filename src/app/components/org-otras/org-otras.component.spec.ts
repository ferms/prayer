import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgOtrasComponent } from './org-otras.component';

describe('OrgOtrasComponent', () => {
  let component: OrgOtrasComponent;
  let fixture: ComponentFixture<OrgOtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgOtrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgOtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
