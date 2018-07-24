const {Event} = require('../models');
const faker = require('faker');

for (let i = 0; i < 100; i++) {
    new Event({
        ID: faker.random.number(),
        experienceType: faker.lorem.words(),
        hostName: faker.name.findName(),
        hostDescription: faker.lorem.paragraph(),
        hostImage: faker.image.avatar(),
        eventName: faker.lorem.words(),
        eventDescription: faker.lorem.paragraph(),
        eventLocation: faker.address.city(),
        eventDuration: faker.random.number(),
        eventProvidedItems: faker.lorem.sentences(),
        eventNotes: faker.lorem.paragraph(),
        eventLanguage: faker.lorem.word(),
        eventViews: faker.random.number(),
    }).save((err, newEvent) => {
        if (err) {
            console.error(err);
        } else {
            console.log('created')
        }
    })
}

// console.log(faker.name.findName());