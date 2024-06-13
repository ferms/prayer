import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgConsagradoComponent } from './org-consagrado.component';

describe('OrgConsagradoComponent', () => {
  let component: OrgConsagradoComponent;
  let fixture: ComponentFixture<OrgConsagradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgConsagradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgConsagradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
