import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaboutComponent } from './ababout.component';

describe('AbaboutComponent', () => {
  let component: AbaboutComponent;
  let fixture: ComponentFixture<AbaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
