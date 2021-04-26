'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Step 1
    const password = bcrypt.hashSync('password', 10);

    let users = [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: faker.internet.email(),
        username: 'DemoUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: faker.internet.email(),
        username: 'DemoUser3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    // Step 2
    const numNewUsers = 50;

    // Each loop will create a new user
    for (let i = 4; i < numNewUsers; i++) {
      let newUser = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(`password${i}`, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      users.push(newUser);
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  // down: (queryInterface, Sequelize) => {
  //   const Op = Sequelize.Op;
  //   return queryInterface.bulkDelete('Users', {
  //     username: { [Op.in]: ['Demo-lition', 'DemoUser2', 'DemoUser3'] }
  //   }, {});
  // }

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};