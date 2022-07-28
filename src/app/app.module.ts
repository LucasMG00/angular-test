import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoModule } from './components/todo-list/todo.module';
import { CoreModule } from './core/components/core.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TodoModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'todos', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
