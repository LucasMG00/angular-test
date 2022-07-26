import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarsModule } from "../shared/components/stars/stars.module";
import { TodoComponent } from "./todo.component";

@NgModule({
    declarations: [
        TodoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarsModule,
        RouterModule.forChild([
            {
            path: 'todos', component: TodoComponent
            }
        ])
    ]
})
export class TodoModule {

}