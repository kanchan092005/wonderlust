const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


const listingController = require("../controllers/listings.js");

router
    .route("/")
    //index
    .get(wrapAsync(listingController.index))
    //create route
    .post(upload.single('listing[image]'),
        wrapAsync(listingController.createListing))



//new route

router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

router
    .route("/:id")
    //show
    .get(wrapAsync(listingController.showListing))
    //update
    .put(upload.single('listing[image]'),wrapAsync(listingController.updateListing))
    //delete
    .delete(wrapAsync(listingController.deleteListing))



//edit route

router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.editListing));



//fake data input route

// router.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "my new villa",
//         description: "by the beach",
//         price: 1200,
//         location: "mumbai",
//         country: "india",
//     });

//     await sampleListing.save();
//     console.log("sample is saved");
//     res.send("sample is saved");
// });

module.exports = router;