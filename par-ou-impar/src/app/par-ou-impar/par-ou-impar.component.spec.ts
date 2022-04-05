import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParOuImparComponent } from './par-ou-impar.component';

describe('ParOuImparComponent', () => {
  let component: ParOuImparComponent;
  let fixture: ComponentFixture<ParOuImparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParOuImparComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParOuImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
