import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo.interface";
import {TodoService} from "../../services/todo.service";


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
    constructor(private todoService: TodoService) {
    }

  ngOnInit(): void {

  }

  public onCompleteTodo(todo: ITodo):void{
    //todo.isCompleted = true;
    this.todoService.onActionTodo(todo.id,'isCompleted')
  }

  public onArchiveTodo():void{
    debugger;
    this._todo.isArchived = true;
    this.todoService.onActionTodo(this._todo.id,'isArchived')
  }

  protected readonly Date = Date;
}
