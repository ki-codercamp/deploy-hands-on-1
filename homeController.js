class HomeController {
  constructor() {
    this.todos = [
      {item: 'learn guitar', completed: false},
      {item: 'buy groceries', completed: false},
      {item: 'wash car', completed: false},
    ];
  }

  addTodo(){
    this.todos.push({'item': this.newTodo, 'completed': false});
    this.newTodo = "";
    console.log(`I have to do this next: ${this.newTodo}`);

  }

  clearList(){
    this.todos = this.todos.filter(function(item){
      return !item.completed
    })
  }

}

angular.module('todoapp').controller('HomeController', HomeController);
