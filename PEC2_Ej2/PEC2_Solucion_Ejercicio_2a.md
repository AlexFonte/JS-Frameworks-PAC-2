Observa que s'han creat funcions handle al fitxer controlador (todo.controller.js), les quals són passades com a paràmetre. Això és degut al  problema amb el canvi de context (this) que existeix a JavaScript. Ara mateix si no  tens molt clar que està succeint, revisa què fan les ***“fat-arrow”*** d'ES6 sobre l'objecte this, i prova a canviar el codi per comprendre què està passant quan es modifica la  línia següent:

```this.view.bindAddTodo(this.handleAddTodo);```

Per aquesta: 

```this.view.bindAddTodo(this.service.addTodo);``` 

Respon, en un document text al directori de lliurament a la següent pregunta: 
Per què és el valor de this és undefined?

