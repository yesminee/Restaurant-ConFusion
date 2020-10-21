//written in jquary syntaxe
$(document).ready(function () {
    $('[data-toggle=tooltip"]').tooltip();
});

//controlr buttons' behaviour
$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });  //sliding speed

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {  //if this button has an fa-pause class
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');    //We're going to remove the pause class from that and then, we're going to add the playClass to restart sliding
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
