import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViacrucisComponent } from './viacrucis.component';

describe('ViacrucisComponent', () => {
  let component: ViacrucisComponent;
  let fixture: ComponentFixture<ViacrucisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViacrucisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViacrucisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
