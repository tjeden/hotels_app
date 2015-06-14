$(document).ready(function(){
    $('.hotels').delegate('[data-show="hotel"]','ajax:complete', 
        function(e, xhr) {
        $('[data-placeholder="hotel"]').html(xhr.responseText);
    });

    var removeHotel = function(e, xhr) {
        var id = $(this).data('hotel');
        $('[data-id=' + id + ']').remove();
    };

    $('.hotels').delegate('[data-delete="hotel"]', 'ajax:complete', 
        removeHotel)

    $('[data-new="hotel"]').on('ajax:complete', function(e, xhr) {
        $('[data-placeholder="hotel"]').html(xhr.responseText);
    });

    $('.hotels').delegate('form[data-create="hotel"]', 'ajax:complete', 
        function(e, xhr) {
        $('[data-placeholder="hotel"]').fadeOut(function(){
            $(this).html("");
            $(this).fadeIn();
            var newHotel = $(xhr.responseText);
            newHotel.hide();
            $('table').append(newHotel);
            newHotel.fadeIn();
        });
    });
});
