const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to add new listings!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    try {
        let { id, reviewId } = req.params;
        let review = await Review.findById(reviewId);
        
        if (!review) {
            req.flash("error", "Review not found!");
            return res.redirect(`/listings/${id}`);
        }

        if (!review.author.equals(res.locals.currUser._id)) {
            req.flash("error", "You do not have permission to do that!");
            return res.redirect(`/listings/${id}`);
        }

        next();
    } catch (err) {
        console.error("Error in isReviewAuthor middleware:", err);
        req.flash("error", "Something went wrong!");
        return res.redirect(`/listings/${id}`);
    }
};
