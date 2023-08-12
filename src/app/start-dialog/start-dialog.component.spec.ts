import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDialogComponent } from './start-dialog.component';

describe('StartDialogComponent', () => {
  let component: StartDialogComponent;
  let fixture: ComponentFixture<StartDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartDialogComponent]
    });
    fixture = TestBed.createComponent(StartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
