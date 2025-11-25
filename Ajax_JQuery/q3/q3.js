$(document).ready(function () {
    $(".question").on("click", function () {
        $(this).next(".answer").slideToggle(200);
    });

    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    $(".question").on("dblclick", function () {
        $(".answer").slideUp(200);
    });

    $(".feedback").on("focus", function () {
        $(this).closest(".faq").addClass("active-input");
    });

    $(".feedback").on("blur", function () {
        $(this).closest(".faq").removeClass("active-input");
    });
});
