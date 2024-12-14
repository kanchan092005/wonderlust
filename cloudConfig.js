const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wondor_lust_DEV',
        allowedFormats: ["png", "jpeg", "jpg"], // Use allowedFormats instead of allowedFormat
    },
});

module.exports = {
    cloudinary,
    storage,
};
