import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwsSharedLibComponent } from './cws-shared-lib.component';

describe('CwsSharedLibComponent', () => {
  let component: CwsSharedLibComponent;
  let fixture: ComponentFixture<CwsSharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwsSharedLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwsSharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
