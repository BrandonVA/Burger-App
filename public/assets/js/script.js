$(document).ready(function () {
    // When Devour btn is clicked...
    $('.devour').on('click', function (event) {
        // Creating an object to store the value of the li id data attr.
        const id = {
            id: $(this).data('burgerid')
        };
        // ajax call to update the value of the devour trait based on the id value.
        $.ajax('/api/devour/', { type: 'PUT', data: id });
        // Reloading the page to update new info.
        location.reload();
    })

    // When the add burger btn is clicked.
    $('#addBurger').on('click', function (event) {
        event.preventDefault();
        // Creating obj to store the value of the input trimmed to remove extra space.
        const burgerName = {
            name: $('#burger-name').val().trim()
        };
        // ajax call to create a new burger row in the db with the input value for the name.
        $.ajax('/api/addBurger/', { type: 'POST', data: burgerName })
        // Reloading page to update new burger to devour.
        location.reload();
    })
})

