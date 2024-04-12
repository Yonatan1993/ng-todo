import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo.interface";
import {TodoService} from "../../services/todo.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit,OnDestroy{

  public todos: Array<ITodo> = [];
  private subscription: Subscription = new Subscription();
  constructor(private todoService:TodoService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe(data =>{
        this.todos = data;
      })
    )
    }

    public onTodoClick(todo:ITodo,index : number): void{
      this.todoService.setSelectedTodo(todo);
      this.todos[index].selected = true;
    }

}
