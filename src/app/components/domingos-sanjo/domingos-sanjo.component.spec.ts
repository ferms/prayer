import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomingosSanjoComponent } from './domingos-sanjo.component';

describe('DomingosSanjoComponent', () => {
  let component: DomingosSanjoComponent;
  let fixture: ComponentFixture<DomingosSanjoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomingosSanjoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomingosSanjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
