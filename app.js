const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDb");


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    rating: {
        type: Number,
        max: 10,
        min: 1
    }
    
})

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    fav: fruitSchema
    
})

const Fruit = mongoose.model("Fruit", fruitSchema)
const Person = mongoose.model("Person", personSchema)
const fruit = new Fruit({ name: "kiwi", rating: 9 });
const fruit3 = new Fruit({ name: "orange", rating: 9 });
const fruit4 = new Fruit({ name: "apricot", rating: 9 });
const fruit5 = new Fruit({ name: "prach", rating: 9 });
const fruit6 = new Fruit({  rating: 1 });


const fruit7 = new Fruit({ name : "blueberry", rating: 2 });
fruit7.save();
const p1 = new Person({name : "khajroor",fav : fruit7})
p1.save();
// Fruit.insertMany([fruit,fruit3,fruit4,fruit5])

Fruit.find().then((val) => {
    val.forEach((e) => {
        console.log(e.name)
    })
})

// Fruit.updateOne({ name: "kaka" }, { name: "peach" }).then((err) => {

// })

