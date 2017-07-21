import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCacheComponent } from './new-cache.component';

describe('NewCacheComponent', () => {
  let component: NewCacheComponent;
  let fixture: ComponentFixture<NewCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
