let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    name: "TEST",
    number: "02-155618",
    date: "2022-07-26T16:48:53.642Z",
    id: "62e01af507fafabac1b87134",
  },
  {
    name: "sample",
    number: "05455451",
    date: "2022-07-26T17:43:27.267Z",
    id: "62e027bfb11f0fc58a6dced2",
  },
];

const personIdex = persons.findIndex((x) => x.name === "TEST");
const personId = persons[personIdex].id;

console.log(personIdex);
console.log(personId);
