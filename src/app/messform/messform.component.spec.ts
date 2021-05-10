import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessformComponent } from './messform.component';

describe('MessformComponent', () => {
  let component: MessformComponent;
  let fixture: ComponentFixture<MessformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
