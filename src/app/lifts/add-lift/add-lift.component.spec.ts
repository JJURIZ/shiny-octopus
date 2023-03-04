import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiftComponent } from './add-lift.component';

describe('AddLiftComponent', () => {
  let component: AddLiftComponent;
  let fixture: ComponentFixture<AddLiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
