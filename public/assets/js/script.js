
$(document).ready(function () {
    $('.devour').on('click', function (event) {
        const id = {
            id: $(this).data('burgerid')
        };
        console.log(id);
        $.ajax('/api/devour/', { type: 'PUT', data: id });
        location.reload();
    })


    $('#addBurger').on('click', function (event) {
        event.preventDefault();
        const burgerName = {
            name: $('#burger-name').val().trim()
        };
        console.log(burgerName);
        $.ajax('/api/addBurger/', { type: 'POST', data: burgerName })
        location.reload();
    })
})

