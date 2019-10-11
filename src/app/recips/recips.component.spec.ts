import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipsComponent } from './recips.component';

describe('RecipsComponent', () => {
  let component: RecipsComponent;
  let fixture: ComponentFixture<RecipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
