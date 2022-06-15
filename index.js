class Car {
  constructor(year, model, manufacture) {
    this.year = year;
    this.model = model;
    this.manufacture = manufacture;
  }
}

class Person {
  constructor(name, surname, age) {
    this.age = age;
    this.name = name;
    this.surname = surname;
  }
}

let persons = [
  new Person("John", "Den", 20),
  new Person("candice", "Loki", 30),
];

let cars = [
  new Car(2022, "starlet xs AT", "toyota"),
  new Car(2023, "Magnite V AT", "Nissan"),
];

function SearchByModelFields(searchQuery = "", list, model) {
  if (searchQuery === "" || searchQuery.trim().length === 0) return list;
  let LowerAndStringify = (input) => {
    return input.toString().toLowerCase();
  };

  let q = LowerAndStringify(searchQuery);
  let keys = Object.keys(model);

  let searchResults = list.filter((elem, idx) => {
    let isValid = keys.some(
      (key) =>
        LowerAndStringify(elem[key]).includes(q) ||
        LowerAndStringify(elem[key]) === q
    );

    return isValid;
  });
  return searchResults;
}

let searchedCars = SearchByModelFields("20", cars, new Car());
let searchedPersons = SearchByModelFields("cand", persons, new Person());
console.log("searchedCarss", searchedCars);
console.log("searchedPersons", searchedPersons);
