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
        name: 'TO-DO Java',
        imageUrl: '/assets/images/java.png',
        stars: 4
    },
    {
        id: 2,
        name: 'TO-DO Angular',
        imageUrl: '/assets/images/angular.png',
        stars: 3
    },
    {
        id: 3,
        name: 'TO-DO Html',
        imageUrl: './assets/images/html.png',
        stars: 3.5
    }
]