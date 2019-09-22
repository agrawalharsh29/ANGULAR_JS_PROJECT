import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO-LIST';
  todos=[{
    label:"Do assignment",
    done: false,
    priority:3
  },
  {
    label:"Do laundry",
    done: true,
    priority:1
  },{
    label:"learn angular",
    done: false,
    priority:5
  },{
    label:"have dinner",
    done: false,
    priority:1
  }
];
addTodo(newTodoLabel,newprior,newdone){
  var newTodo={
    label: newTodoLabel,
    priority:newprior,
    done:newdone
  };
  this.todos.push(newTodo);
 
}
deleteTodo(todo){
  this.todos = this.todos.filter(t=>t.label!==todo.label);
   

}
}
