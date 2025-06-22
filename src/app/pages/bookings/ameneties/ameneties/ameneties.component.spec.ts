import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenetiesComponent } from './ameneties.component';

describe('AmenetiesComponent', () => {
  let component: AmenetiesComponent;
  let fixture: ComponentFixture<AmenetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmenetiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
