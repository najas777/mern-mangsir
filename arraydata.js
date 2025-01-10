const simpleData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      gender: 'male',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      gender: 'female',
    },
    {
      id: 3,
      name: 'Bob Smith',
      age: 35,
      gender: 'male',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      age: 28,
      gender: 'female',
    }
  ];
  const males = simpleData.filter((person) => person.gender === "male");
console.log(males);

const singleData = simpleData.filter((person) => person.id === 1);

console.log(singleData);

const idToFind = 4;
const result = simpleData.filter(item => item.id === idToFind);

console.log(result);