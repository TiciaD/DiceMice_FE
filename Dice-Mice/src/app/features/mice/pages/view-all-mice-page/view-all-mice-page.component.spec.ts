import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMicePageComponent } from './view-all-mice-page.component';

describe('ViewAllMicePageComponent', () => {
  let component: ViewAllMicePageComponent;
  let fixture: ComponentFixture<ViewAllMicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllMicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllMicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
