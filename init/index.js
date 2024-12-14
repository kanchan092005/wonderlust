const MONGO_URL = "mongodb://127.0.0.1:27017/wondorlust";
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

main()
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "662e9a5ccb8e10fc54b53bf8" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();