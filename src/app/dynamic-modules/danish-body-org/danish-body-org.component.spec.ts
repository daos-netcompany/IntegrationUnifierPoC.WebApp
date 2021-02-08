import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanishBodyOrgComponent } from './danish-body-org.component';

describe('DanishBodyOrgComponent', () => {
  let component: DanishBodyOrgComponent;
  let fixture: ComponentFixture<DanishBodyOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanishBodyOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanishBodyOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
