import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotyPageComponent } from './goty-page.component';

describe('GotyPageComponent', () => {
  let component: GotyPageComponent;
  let fixture: ComponentFixture<GotyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotyPageComponent]
    });
    fixture = TestBed.createComponent(GotyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
