var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// ¿Cómo harías print/log de la edad de John?

console.log('Edad de John: ', users[2].age);

// ¿Cómo harías print/log del nombre del primer objeto?

console.log('Nombre primer objeto:', users[0].name);

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?

for(var i = 0; i < users.length; i++) {
    console.log(users[i].name, '-', users[i].age);
}

// ¿Cómo harías para imprimir el nombre de los mayores de edad?

console.log('--- Mayores de edad ---');
for(var i = 0; i < users.length; i++) {
    if(users[i].age >= 18) {
        console.log(users[i].name);
    }
}