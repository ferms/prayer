import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronillaMisericordiaComponent } from './coronilla-misericordia.component';

describe('CoronillaMisericordiaComponent', () => {
  let component: CoronillaMisericordiaComponent;
  let fixture: ComponentFixture<CoronillaMisericordiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoronillaMisericordiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoronillaMisericordiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
