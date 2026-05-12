import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { AppState, selectCounter } from './store/counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 protected readonly title = signal('ngrx-tutorial');

  counter$!: Observable<number>;

  constructor(private store:Store<AppState>){
    this.counter$ = this.store.select(selectCounter);
  }

  
  

  inc(){
    this.store.dispatch(increment());
  }

  dec(){
    this.store.dispatch(decrement());
  }

  resetCount(){
    this.store.dispatch(reset());
}
}
