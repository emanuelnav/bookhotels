$(function (){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    $('#contacto').on('show.bs.modal', function (e) {
       $('#contactoBtn').removeClass('btn-outline-success');
       $('#contactoBtn').addClass('btn-success');
       $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        $('#contactoBtn').prop('disabled', false);
    });
});

$(function (){
    $("[data-toggle='tooltip']").tooltip();
});