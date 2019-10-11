import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipsListComponent } from './recips-list.component';

describe('RecipsListComponent', () => {
  let component: RecipsListComponent;
  let fixture: ComponentFixture<RecipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
