import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderPageComponent } from './loader-page.component';

describe('LoaderPageComponent', () => {
  let component: LoaderPageComponent;
  let fixture: ComponentFixture<LoaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
