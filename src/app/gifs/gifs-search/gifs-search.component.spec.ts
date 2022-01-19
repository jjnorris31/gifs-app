import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSearchComponent } from './gifs-search.component';

describe('GifsSearchComponent', () => {
  let component: GifsSearchComponent;
  let fixture: ComponentFixture<GifsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
