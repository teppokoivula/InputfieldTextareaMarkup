$(function() {
    $('a.textarea-markup-edit').on('click', function() {
        $(this).parent().find('.textarea-markup-edit:not(a), div').toggle();
        var $i = $(this).find('i.fa');
        $i.toggleClass('fa-check-circle');
        $(this).find('> span').text($i.hasClass('fa-check-circle') ? $(this).data('done') : $(this).data('edit'));
        return false;
    });
});