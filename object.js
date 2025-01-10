const person = {
    firstName: 'ram',
    lastName: 'sharma',
    age: 90,
    height: 100.9,
    address: 'new road',
    habits: ['sing', 'car'],
    fullFunc: function () {
      console.log(this.firstName);
      console.log(this.lastName);
    }
  };
  
  person.fullFunc();
  // console.log(`${person.firstName} ${person.lastName}`);
  
  
  // person.salary = 900;  // add
  // person.age = 100;  // update
  // delete person.address // delete
  // const m = person.sleep();
  // console.log(m);
  
//   person.salary = 900;  // add
//   person.age = 100;  // update
//   delete person.address // delete
//   const m = person.sleep();
//   console.log(m);
// //car
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     color: "Red"
//   };
  
//   console.log(car.brand); // Output: Toyota
//   console.log(car.year);  // Output: 2022
//   console.log(car);       // Output: { brand: 'Toyota', model: 'Corolla', year: 2022, color: 'Red' }
//   const bank = {
//     name: "Global Bank",
//     location: "New York",
//     established: 1990,
//     branches: 120,
//     isInternational: true
//   };
  
//   console.log(bank.name);           // Output: Global Bank
//   console.log(bank.location);       // Output: New York
//   console.log(bank.branches);       // Output: 120
//   console.log(bank.isInternational); // Output: true
//   console.log(bank);                // Output: { name: 'Global Bank', location: 'New York', established: 1990, branches: 120, isInternational: true }
//   //restaurant
//   const restaurant = {
//     name: "Gourmet Paradise",
//     location: "123 Main Street, Springfield",
//     cuisine: "Italian",
//     rating: 4.5,
//     isOpen: true,
//     menu: [
//       { item: "Margherita Pizza", price: 12.99 },
//       { item: "Spaghetti Carbonara", price: 14.99 },
//       { item: "Tiramisu", price: 6.99 }
//     ],
//     seatingCapacity: 50
//   };
  
//   console.log(restaurant.name); // Output: Gourmet Paradise
//   console.log(restaurant.menu[0].item); // Output: Margherita Pizza
  
  