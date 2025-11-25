$(document).ready(function () {
    const searchInput = $("#searchBox");
    const courseItems = $("#courseList li");
    const countDisplay = $("#countDisplay");

    function filterCourses() {
        const text = searchInput.val().toLowerCase();
        let count = 0;
        courseItems.removeClass("match");

        courseItems.each(function () {
            const c = $(this).text().toLowerCase();
            if (text === "" || c.includes(text)) {
                $(this).show();
                if (text !== "") $(this).addClass("match");
                count++;
            } else {
                $(this).hide();
            }
        });

        countDisplay.text("Matched courses: " + count);
    }

    searchInput.on("keyup", filterCourses);
    $("#clearBtn").on("click", function () {
        searchInput.val("");
        filterCourses();
    });

    filterCourses();
});
