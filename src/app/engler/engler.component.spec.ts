import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglerComponent } from './engler.component';

describe('EnglerComponent', () => {
  let component: EnglerComponent;
  let fixture: ComponentFixture<EnglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
