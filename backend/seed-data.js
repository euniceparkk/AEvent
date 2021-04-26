const faker = require('faker');

const eventsData = [
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 1,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 0.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(3),
    userHostId: 1,
    categoryId: 2,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(5),
    userHostId: 1,
    categoryId: 3,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 0.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 4,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 10.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 5,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 6,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 7,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: faker.lorem.words(4),
    userHostId: 1,
    categoryId: 8,
    image: faker.image.people(),
    description: faker.lorem.paragraphs(4),
    city: faker.address.city(),
    state: faker.address.state(),
    dateAndTime: faker.date.future(),
    totalTickets: 10,
    ticketPrice: 5.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

const ticketsData = [
  { eventId: 1, userId: 10 },
  { eventId: 2, userId: 11 },
  { eventId: 3, userId: 12 },
  { eventId: 4, userId: 13 },
  { eventId: 5, userId: 14 },
  { eventId: 6, userId: 15 },
  { eventId: 7, userId: 16 },
  { eventId: 8, userId: 17 },
  { eventId: 2, userId: 18 },
];

const favoritesData = [
  { eventId: 1, userId: 10 },
  { eventId: 2, userId: 11 },
  { eventId: 3, userId: 12 },
  { eventId: 4, userId: 13 },
  { eventId: 5, userId: 14 },
  { eventId: 6, userId: 15 },
  { eventId: 7, userId: 16 },
  { eventId: 8, userId: 17 },
  { eventId: 2, userId: 18 },
];

module.exports = {
  eventsData,
  ticketsData,
  favoritesData
}