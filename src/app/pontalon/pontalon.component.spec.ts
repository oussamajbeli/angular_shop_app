import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontalonComponent } from './pontalon.component';

describe('PontalonComponent', () => {
  let component: PontalonComponent;
  let fixture: ComponentFixture<PontalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
