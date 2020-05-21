import { Component } from '@angular/core';
import {Todo} from './notes';
import { from } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'myAngular';
  noteValue: string; 
  list: Todo[];

  ngOnInit(){
    this.list= [];
    this.noteValue= "";
  }
  AddItem(){
    if(this.noteValue !== ""){
      const newItem: Todo ={
        id: Date.now(),
        value: this.noteValue,
        isDone: false
      }
      this.list.push(newItem);
    }
    this.noteValue= "";
  }
  delete(id:number){
    this.list= this.list.filter(item => item.id !== id);
  }
}
