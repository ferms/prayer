import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronillaSangreCristoComponent } from './coronilla-sangre-cristo.component';

describe('CoronillaSangreCristoComponent', () => {
  let component: CoronillaSangreCristoComponent;
  let fixture: ComponentFixture<CoronillaSangreCristoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoronillaSangreCristoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoronillaSangreCristoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
