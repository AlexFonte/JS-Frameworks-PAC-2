/*
    Es crea un funció findOne() que accepta els següents paràmetres:
    - list: array,
    - un objecte amb key/value,
    - un objecte amb 2 funcions onSuccess, onError
 */
const findOne = (list, { key, value }) => {
    //Es crea una nova promesa, i es retorna
    return new Promise((resolve, reject) => {
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


const callAsyncFindAll = async () => {
    //Imprimeix per consola el missatge de findOne success
    console.log('Starting all promise in parallel');
    
    const resultParallelPromises = await Promise.allSettled([
            findOne(users, { key: 'name', value: 'Carlos' }),
            findOne(users, { key: 'name', value: 'Fermin' })
        ]);

    resultParallelPromises.forEach(result => {
        if (result.status === "fulfilled") {
            onSuccess(result.value);
            console.log('findOne success');
        } else {
            onError(result.reason);
            console.log('findOne error');
        }
    });

    console.log('Ending all promise in parallel');
    //Imprimeix per consola el missatge de findOne error
};

callAsyncFindAll();



/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
