import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserTrailerComponent } from './teaser-trailer.component';

describe('TeaserTrailerComponent', () => {
  let component: TeaserTrailerComponent;
  let fixture: ComponentFixture<TeaserTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
