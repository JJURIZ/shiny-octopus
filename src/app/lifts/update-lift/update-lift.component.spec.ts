import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLiftComponent } from './update-lift.component';

describe('UpdateLiftComponent', () => {
  let component: UpdateLiftComponent;
  let fixture: ComponentFixture<UpdateLiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
