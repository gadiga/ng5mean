import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpArrowComponent } from './jump-arrow.component';

describe('JumpArrowComponent', () => {
  let component: JumpArrowComponent;
  let fixture: ComponentFixture<JumpArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
