import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  constructor(public dialog:MatDialog) {
  }


  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}


