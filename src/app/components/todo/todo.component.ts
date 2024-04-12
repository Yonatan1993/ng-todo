import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo.interface";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{



    @Input() set todo (todo: ITodo){
      this._todo = todo;
      console.log(todo);
    };

  public _todo: ITodo;
  get():ITodo{
    return this._todo;
  }
    constructor() {
    }

  ngOnInit(): void {

  }

  public onCompleteTodo(todo: ITodo):void{
    todo.isCompleted = true;
  }

  public onArchiveTodo():void{
    this._todo.isArchived = true;
  }

}
