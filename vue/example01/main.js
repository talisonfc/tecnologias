var app = new Vue({
  el: "#app",
  data: {
    produto: "Produto"
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'texto a'},
      {text: 'texto b'},
      {text: 'texto c'},
      {text: 'texto d'},
      {text: 'texto e'}
    ]
  }
})

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Talison"
  },
  methods: {
    reverseMessage: ()=>{
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Talison"
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: "<li>{{todo.text}}</li>"
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    todos: [
      {id: 0, text: 'item a'},
      {id: 1, text: 'item b'},
      {id: 2, text: 'item c'},
    ]
  }
})