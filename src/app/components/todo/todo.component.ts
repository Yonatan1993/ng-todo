import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ITodo} from "../../models/todo.interface";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit,OnDestroy{


  private subscription: Subscription = new Subscription()
    public todo: ITodo;
    constructor(private todoService: TodoService) {
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }


  ngOnInit(): void {
   this.subscription.add(this.todoService.getSelectedTodo().subscribe(data =>{
     this.todo = data;
   }));
  }

  public onCompleteTodo(todo: ITodo):void{
    todo.isCompleted = true;
  }

  public onArchiveTodo():void{
    this.todo.isArchived = true;
  }

}
