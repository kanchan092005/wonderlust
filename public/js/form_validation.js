document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('listing-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission initially

        var title = document.getElementById('title-input');
        var description = document.getElementById('description-input');
        
        var price = document.getElementById('price-input');
        var country = document.getElementById('country-input');
        var location = document.getElementById('location-input');

        var titleError = document.getElementById('title-error');
        var descriptionError = document.getElementById('description-error');
       
        var priceError = document.getElementById('price-error');
        var countryError = document.getElementById('country-error');
        var locationError = document.getElementById('location-error');

        titleError.innerText = ''; // Clear previous error messages
        descriptionError.innerText = '';
        
        priceError.innerText = '';
        countryError.innerText = '';
        locationError.innerText = '';

        if (!title.value.trim()) {
            titleError.innerText = 'Title is required !';
            title.classList.add('is-invalid');
        } else {
            title.classList.remove('is-invalid');
        }

        if (!description.value.trim()) {
            descriptionError.innerText = 'Description is required !';
            description.classList.add('is-invalid');
        } else {
            description.classList.remove('is-invalid');
        }

       

        if (!price.value.trim()) {
            priceError.innerText = 'Price is required !';
            price.classList.add('is-invalid');
        } else {
            price.classList.remove('is-invalid');
        }

        if (!country.value.trim()) {
            countryError.innerText = 'Country is required !';
            country.classList.add('is-invalid');
        } else {
            country.classList.remove('is-invalid');
        }

        if (!location.value.trim()) {
            locationError.innerText = 'Location is required !';
            location.classList.add('is-invalid');
        } else {
            location.classList.remove('is-invalid');
        }

        if (titleError.innerText || descriptionError.innerText || priceError.innerText || countryError.innerText || locationError.innerText) {
            // At least one field is invalid, prevent form submission
            return;
        }

        // All fields are valid, allow form submission
        form.submit();
    });
});
