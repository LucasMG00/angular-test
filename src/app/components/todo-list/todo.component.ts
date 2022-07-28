import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "./todo";

@Component({
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

    filteredTodos: Todo[] = [];

    _todos: Todo[] = [];

    _filterBy: string = '';

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.todoService.retrieveAll().subscribe({
            next: todos => {
                this._todos = todos
                this.filteredTodos = this._todos;
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredTodos = this._todos.filter((todo: Todo) => 
        todo.name.toLocaleLowerCase()
        .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter() {
        return this._filterBy;
    }
}