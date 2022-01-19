import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsResultsComponent } from './gifs-results.component';

describe('GifsResultsComponent', () => {
  let component: GifsResultsComponent;
  let fixture: ComponentFixture<GifsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
