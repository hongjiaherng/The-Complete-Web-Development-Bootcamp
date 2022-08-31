const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

Person.updateOne({name: "Ali"}, {favouriteFruit: kiwi}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(fruit => {
      console.log(fruit.name)
    });
  }
});

// const fruit = new Fruit({
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });
// fruit.save();



// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit"
// });

// pineapple.save();

// const person = new Person({
//   name: "John",
//   age: 37,
//   favouriteFruit: pineapple
// });

// person.save();


// const orange = new Fruit({
//   name: "Orange",
//   score: 5,
//   review: "Too sour for me."
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });



// Fruit.updateOne({_id: "630f6bfcb5340d446ea10324"}, {name: "Peach"}, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });

// Person.deleteMany({name: "John"}, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents.");
//   }
// });