import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';

  todoList: Todo[] = [
    {
      task: "fold clothes",
      complete: false
    },
    {
      task: "put clothes in dresser",
      complete: false
    },
    {
      task: "relax",
      complete: true
    },
    {
      task: "try to pet cat",
      complete: false
    },
    {
      task: "pet dog",
      complete: false
    },
    {
      task: "be awesome",
      complete: false
    },
  ]

  addTask(form:NgForm):void{
    let newTask:Todo = {
      task: form.form.value.task,
      complete: false
    }
    this.todoList.push(newTask);
  };

  completeTask():void{

  }

  removeTask(index:number):void{
    if(index > -1){
      this.todoList.splice(index,1)
    }
  }
}