$(document).ready(function () {
    const banners = $(".banner");
    let index = 0;

    banners.eq(0).show();

    $("#hideBtn").on("click", () => banners.hide());
    $("#showBtn").on("click", () => banners.show());
    $("#slideBtn").on("click", () => banners.slideToggle(200));
    $("#fadeBtn").on("click", () => banners.fadeToggle(200));

    setInterval(function () {
        const current = banners.eq(index);
        let nextIndex = index + 1;
        if (nextIndex >= banners.length) nextIndex = 0;
        const next = banners.eq(nextIndex);
        current.fadeOut(500, () => next.fadeIn(500));
        index = nextIndex;
    }, 5000);
});
