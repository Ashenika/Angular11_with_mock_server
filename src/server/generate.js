var faker = require('faker');

var database = { employees: []};

for (var i = 1; i<= 300; i++) {
    database.employees.push({
        id: i,
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        email: faker.internet.email(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        department: faker.lorem.word(),
        imageUrl: faker.image.avatar(),
    });
}

console.log(JSON.stringify(database));