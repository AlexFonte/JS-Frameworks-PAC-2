/*
    Es crea un funció findOne() que accepta els següents paràmetres:
    - list: array,
    - un objecte amb key/value,
    - un objecte amb 2 funcions onSuccess, onError
 */
const findOne = (list, { key, value }) => {
//Es crea una nova promesa, i es retorna
    return new Promise((resolve, reject) =>{
        //Mètode que executa de forma asíncrona un funcion passat x mil·lisegons, en aquest cas 2000ms --> 2s
        setTimeout(() => {
            // En una constant 'element' es guarda el resultat de buscar en l' array 'list',
            // un objecte amb un la propietat 'key' i el valor sigui igual 'value', que passem per paràmetres
            const element = list.find(element => element[key] === value);
            // Operador condicional,
            // on es verifica que en cas que existeixi l'objecte recuperat en la línia anterior, executarà la funció onSuccess amb el paràmetre 'element'.
            // En el cas contrari executarà la funció onError amb un missatge.
            element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
        }, 2000);//Acabar de definir la funció setTimeout amb els ms corresponents.
    });
};


// Es defineixen els callbacks onSuccess i onError, amb els paràmetres corresponents.
// Quan s'executa la funció onSucces , com resultat s'imprimeix en la consola el valor del paràmetre passat.
const onSuccess = ({ name }) => console.log(`user: ${name}`);

// Quan s'executa la funció onError, com resultat s'imprimeix en la consola el valor del paràmetre passat.
const onError = ({ msg }) => console.log(msg);

//Llista de dades, un array que conté varis objectes amb les propietats de 'name' i 'rol'.
const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

//Imprimeix per consola el missatge de findOne success
console.log('findOne success');
/*
    Executa la funció 'findOne' amb els següents paràmetres:
    - users, array d'objectes creats anteriorment.
    - objecte amb les propietat 'key', 'value' amb els respectius valors.
    - objecte amb els callbacks definits en les línies anteriors.

    El resultat esperat, és un resultat vàlid, en aquest cas en el llistat d'users' es troba un objecte amb la key = 'name' i amb el valor 'Carlos'.
 */
findOne(users, { key: 'name', value: 'Carlos' })
    .then(onSuccess) //En el cas que la promesa es resolgui correctament, es llançarà la funció onSuccess().
    .catch(onError); //En el cas que la promesa es rebutgi, es capturarà l'error i es llançarà la funció onError().

//Imprimeix per consola el missatge de findOne error
console.log('findOne error');

/*
    El resultat esperat, és un resultat invàlid, en aquest cas en el llistat d'users' no té cap objecte amb la key = 'name' i amb el valor 'Fermin'.
 */
findOne(users, { key: 'name', value: 'Fermin' })
    .then(onSuccess) //En el cas que la promesa es resolgui correctament, es llançarà la funció onSuccess().
    .catch(onError); //En el cas que la promesa es rebutgi, es capturarà l'error i es llançarà la funció onError().

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
