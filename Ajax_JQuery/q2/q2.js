$(document).ready(function () {
    $(".product").on("click", function () {
        $(this).toggleClass("highlighted");
        if ($(this).data("stock") === "out") alert("Out of stock");
    });

    $(".product").hover(
        function () { $(this).find(".details").slideDown(150); },
        function () { $(this).find(".details").slideUp(150); }
    );

    $(".favorite").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
});
