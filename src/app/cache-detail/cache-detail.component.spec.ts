import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheDetailComponent } from './cache-detail.component';

describe('CacheDetailComponent', () => {
  let component: CacheDetailComponent;
  let fixture: ComponentFixture<CacheDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
