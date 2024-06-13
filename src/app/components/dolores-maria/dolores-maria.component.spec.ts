import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoloresMariaComponent } from './dolores-maria.component';

describe('DoloresMariaComponent', () => {
  let component: DoloresMariaComponent;
  let fixture: ComponentFixture<DoloresMariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoloresMariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoloresMariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
