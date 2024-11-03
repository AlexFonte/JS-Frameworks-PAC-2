Observa que s'han creat funcions handle al fitxer controlador (todo.controller.js), les quals són passades com a paràmetre. Això és degut al  problema amb el canvi de context (this) que existeix a JavaScript. Ara mateix si no  tens molt clar que està succeint, revisa què fan les ***“fat-arrow”*** d'ES6 sobre l'objecte this, i prova a canviar el codi per comprendre què està passant quan es modifica la  línia següent:

```this.view.bindAddTodo(this.handleAddTodo);```

Per aquesta: 

```this.view.bindAddTodo(this.service.addTodo);``` 

Respon, en un document text al directori de lliurament a la següent pregunta: 
**Per què és el valor de this és undefined?**

Normalment, el valor de `this` depèn de com sigui executada la funció i on es troba. En funcions normals, `this` fa referència a un objecte global o és `undefined`.

En canviar `this.handleAddTodo` per `this.service.addTodo`, en el moment de fer la crida des de la funció de `todo.view.js`, aquest mateix no té la referència del context, i per tant `this = undefined`.

Una solució per a aquest cas seria aplicar `bind` per enllaçar el context sobre el qual es desitja executar la funció, com per exemple `this.service.addTodo.bind(this.service)`.

Una altra solució podria ser l'ús de les ***arrow functions***, com es pot veure implementat en l'exercici. Les ***arrow functions*** no tenen el context de this com les funcions normals, de manera que mantenen el context de l'àmbit on es defineixen, ll mètode ***handleAddTodo*** del controlador, en la vista, té el mateix context de `this` que en el moment en què es va crear.