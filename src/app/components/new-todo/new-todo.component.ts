import {Component, ViewChild} from '@angular/core';
import { NgForm} from "@angular/forms";
import {ITodo} from "../../models/todo.interface";
import {MatDialog} from "@angular/material/dialog";
import {TodoService} from "../../services/todo.service";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
  @ViewChild('f') form: NgForm;
  public minDate: Date = new Date();

  constructor(public  dialog:MatDialog,private todoService: TodoService) {
  }

  onNewSubmit(): void {
  if(this.form.valid){
    const formValues =this.form.form.value
    const newTodo:ITodo = {
      id: uuidv4(),
      title: formValues.title,
      description: formValues.description,
      endDate: formValues.date,
      isArchived:false,
      isCompleted:false,
      selected:false
    }
    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();
    console.dir(this.form);
  }

  }

}
