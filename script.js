$(document).ready(function() {
    const apiRoot = 'https://tranquil-basin-40479.herokuapp.com/v1/library';
    const datatableRowTemplate = $('[data-datatable-row-template]').children()[0];
    const $booksContainer = $('[data-books-container]');

    let availableBoards = {};
    let availableBooks = {};

    $('[data-book-add-form]').on(
        'submit',
        function() {
            $.ajax({
                url: apiRoot + '/createBook',
                method: 'POST',
                processData: false,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify({
                    title: $(this).find('[name="title"]').val(),
                    signature: $(this).find('[name="signature"]').val()
                }),
                success: function(data) {
                    console.log(data);
                    alert('Book created');
                }
            });

            return false;
        }
    );
});
