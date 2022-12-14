import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDialogComponent } from './youtube-dialog.component';

describe('YoutubeDialogComponent', () => {
  let component: YoutubeDialogComponent;
  let fixture: ComponentFixture<YoutubeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
