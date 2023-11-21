import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})
export class AppComponent implements OnInit {

  constructor(private readonly fb: FormBuilder) {}
  public form!: FormGroup;

  public movements: Movements[] = ([
    {value: 'benchPress', viewValue: 'Bench Press'},
    {value: 'deadLift', viewValue: 'Dead Lift'},
    {value: 'backSquat', viewValue: 'Back Squat'},
    {value: 'overheadPress', viewValue: 'Overhead Press'},
    ]);

  public reps = new FormControl(0);

  public sets = new FormControl(0);

  public weight = new FormControl(0);

  public total = new FormControl();

  public effort = new FormControl();

  ngOnInit() {
    this.form = this.fb.group({
      movements: this.movements,
      reps: this.reps,
      sets: this.sets,
      weight: this.weight,
      total: this.total,
      effort: this.effort,
    });

    this.form.valueChanges.subscribe(() => {
      const total = this.calculateTotal(this.form);
      this.form.patchValue({ total: total });
    });
  }

  private calculateTotal(form: FormGroup): number {
    const reps = form.get('reps')?.value;
    const sets = form.get('sets')?.value;
    const weight = form.get('weight')?.value;

    return reps * sets * weight;
  }
}

export interface Movements {
  value: string;
  viewValue: string;
}
