import { Injectable } from "@angular/core";
import { Todo } from "../components/todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    retrieveAll(): Todo[] {
        return TODOS;
    }
}

var TODOS: Todo[] = [
    {
        id: 1,
        name: 'TODO',
        imageUrl: '/assets/images/LMG LOGO.ico',
        stars: 3
    },
    {
        id: 2,
        name: 'TODO2',
        imageUrl: '/assets/images/STORAGE LOGO.ico',
        stars: 4
    }
]