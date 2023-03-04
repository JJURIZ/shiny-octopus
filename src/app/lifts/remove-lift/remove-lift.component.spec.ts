import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLiftComponent } from './remove-lift.component';

describe('RemoveLiftComponent', () => {
  let component: RemoveLiftComponent;
  let fixture: ComponentFixture<RemoveLiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
