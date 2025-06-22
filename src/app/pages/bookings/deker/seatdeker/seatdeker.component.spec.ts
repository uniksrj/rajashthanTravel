import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatdekerComponent } from './seatdeker.component';

describe('SeatdekerComponent', () => {
  let component: SeatdekerComponent;
  let fixture: ComponentFixture<SeatdekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatdekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatdekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
