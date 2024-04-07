import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ITodo} from "../models/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _mock: ITodo[] = [
    {
      "title": "Opossum, american virginia",
      "description": "Didelphis virginiana",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "7/29/2023"
    },
    {
      "title": "Brown pelican",
      "description": "Pelecanus occidentalis",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "3/21/2024"
    },
    {
      "title": "Red-winged hawk (unidentified)",
      "description": "unavailable",
      "isCompleted": true,
      "isArchived": true,
      "endDate": "7/9/2023"
    },
    {
      "title": "Western bearded dragon",
      "description": "Amphibolurus barbatus",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "12/3/2023"
    },
    {
      "title": "Coatimundi, white-nosed",
      "description": "Nasua narica",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "10/25/2023"
    },
    {
      "title": "Stork, european",
      "description": "Ciconia ciconia",
      "isCompleted": true,
      "isArchived": true,
      "endDate": "1/31/2024"
    },
    {
      "title": "Glossy starling (unidentified)",
      "description": "Lamprotornis sp.",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "11/12/2023"
    },
    {
      "title": "Goose, andean",
      "description": "Chloephaga melanoptera",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "9/2/2023"
    },
    {
      "title": "Red-tailed phascogale",
      "description": "Phascogale calura",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "2/6/2024"
    },
    {
      "title": "Cape clawless otter",
      "description": "Aonyx capensis",
      "isCompleted": true,
      "isArchived": true,
      "endDate": "11/11/2023"
    },
    {
      "title": "Trumpeter, green-winged",
      "description": "Psophia viridis",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "9/2/2023"
    },
    {
      "title": "Boat-billed heron",
      "description": "Cochlearius cochlearius",
      "isCompleted": true,
      "isArchived": true,
      "endDate": "3/4/2024"
    },
    {
      "title": "Bent-toed gecko",
      "description": "Cyrtodactylus louisiadensis",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "3/27/2024"
    },
    {
      "title": "Bird, black-throated butcher",
      "description": "Cracticus nigroagularis",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "12/28/2023"
    },
    {
      "title": "Turaco, violet-crested",
      "description": "Tauraco porphyrelophus",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "3/27/2024"
    },
    {
      "title": "European wild cat",
      "description": "Felis silvestris lybica",
      "isCompleted": true,
      "isArchived": true,
      "endDate": "8/7/2023"
    },
    {
      "title": "White-necked stork",
      "description": "Ciconia episcopus",
      "isCompleted": true,
      "isArchived": false,
      "endDate": "12/9/2023"
    },
    {
      "title": "Stork, woolly-necked",
      "description": "Ciconia episcopus",
      "isCompleted": true,
      "isArchived": false,
      "endDate": "10/30/2023"
    },
    {
      "title": "Rufous tree pie",
      "description": "Dendrocitta vagabunda",
      "isCompleted": true,
      "isArchived": false,
      "endDate": "5/18/2023"
    }

  ]


  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this._mock);

  constructor() { }

  public  getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable()
  }
}
