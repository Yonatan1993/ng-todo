import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTodoComponent} from "../components/new-todo/new-todo.component";
import {TodoService} from "../services/todo.service";
import {ITodo} from "../models/todo.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent implements OnInit,OnDestroy{
  private subscription: Subscription = new Subscription();
  public todo: ITodo;
  public todos: ITodo[];

  constructor(public dialog:MatDialog,private todoService: TodoService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.subscription.add(this.todoService.getSelectedTodo().subscribe(data =>{
      this.todo = data;
    }));

    this.subscription.add(
      this.todoService.getTodos().subscribe(data =>{
        this.todos = data;
      })
    )
    }


  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      height: '400px',
      width: '300px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
