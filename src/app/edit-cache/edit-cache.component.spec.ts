import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCacheComponent } from './edit-cache.component';

describe('EditCacheComponent', () => {
  let component: EditCacheComponent;
  let fixture: ComponentFixture<EditCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
