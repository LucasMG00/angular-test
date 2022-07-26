import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../components/todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private todoUrl: string = 'http://localhost:3100/api/todos';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(this.todoUrl);
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