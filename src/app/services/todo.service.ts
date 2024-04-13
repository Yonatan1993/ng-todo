import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ITodo} from "../models/todo.interface";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<ITodo> = [];
  private _mock: ITodo[] = [
  /*  {
      "id":1,
      "title": "Opossum, american virginia",
      "description": "Didelphis virginiana",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "7/29/2023",
      "selected" : false
    },
    {
      "id":2,
      "title": "Brown pelican",
      "description": "Pelecanus occidentalis",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "3/21/2024",
      "selected": false
    },
    {
      "id":3,
      "title": "Red-winged hawk (unidentified)",
      "description": "unavailable",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "7/9/2023",
      "selected": false
    },
    {
      "id":4,
      "title": "Western bearded dragon",
      "description": "Amphibolurus barbatus",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "12/3/2023",
      "selected": false
    },
    {
      "id":5,
      "title": "Coatimundi, white-nosed",
      "description": "Nasua narica",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "10/25/2023",
      "selected": false
    },
    {
      "id":6,
      "title": "Stork, european",
      "description": "Ciconia ciconia",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "1/31/2024",
      "selected": false
    },
    {
      "id":7,
      "title": "Glossy starling (unidentified)",
      "description": "Lamprotornis sp.",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "11/12/2023",
      "selected": false
    },
    {
      "id":8,
      "title": "Goose, andean",
      "description": "Chloephaga melanoptera",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "9/2/2023",
      "selected": false
    },
    {
      "id":9,
      "title": "Red-tailed phascogale",
      "description": "Phascogale calura",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "2/6/2024",
      "selected": false
    },
    {
      "id":10,
      "title": "Cape clawless otter",
      "description": "Aonyx capensis",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "11/11/2023",
      "selected": false
    },
    {
      "id":11,
      "title": "Trumpeter, green-winged",
      "description": "Psophia viridis",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "9/2/2023",
      "selected": false
    },
    {
      "id":12,
      "title": "Boat-billed heron",
      "description": "Cochlearius cochlearius",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "3/4/2024",
      "selected": false
    },
    {
      "id":13,
      "title": "Bent-toed gecko",
      "description": "Cyrtodactylus louisiadensis",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "3/27/2024",
      "selected": false
    }*/

  ]


  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null );

  constructor() { }

  public  getTodos(): Observable<Array<ITodo>>{
    if(!this._todoSubject.value.length){
      const  todosString = localStorage.getItem('todos');
      debugger;
      if(todosString){
        const exisitingTodos : Array<ITodo> = JSON.parse(todosString);
        exisitingTodos[0].selected = true;
        this._todoSubject.next(exisitingTodos);
        this._singleTodoSubject.next(exisitingTodos[0]);
      }
    }
    return this._todoSubject.asObservable()


  }

  public  getSelectedTodo() : Observable<ITodo>{
    return this._singleTodoSubject.asObservable();

  }

  public setSelectedTodo(todo: ITodo){
    console.log(this.todos)
    const oldTodo: ITodo = this._singleTodoSubject.getValue();
    if(!!oldTodo){
      this._singleTodoSubject.getValue().selected = false;
    }

    this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo:ITodo){
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    existingTodos.push(newTodo);
    this._todoSubject.next(existingTodos);
    console.log(newTodo.id);

    localStorage.setItem("todos",JSON.stringify(existingTodos));
  }
}
