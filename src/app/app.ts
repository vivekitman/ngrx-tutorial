import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { resetForm, updateFormField } from './Form/form.actions';
import { formFeature } from './Form/form.feature';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // form$ : Observable<{ name: string; email: string }>;


  // constructor( private store: Store ) {
  //   this.form$ = this.store.select(formFeature.selectFormState);
  // }

  private store = inject(Store);

  form$ = this.store.select(formFeature.selectFormState);

  updatedField(field: 'name' | 'email', value: string) {
    this.store.dispatch( updateFormField({ field, value }) );
  }

  resetForm() {
    this.store.dispatch(resetForm())
  }
}

