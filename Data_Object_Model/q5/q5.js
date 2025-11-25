const searchBox = document.getElementById("searchBox");
const tableBody = document.querySelector("#studentsTable tbody");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", function () {
    const searchText = searchBox.value.toLowerCase().trim();
    let visibleCount = 0;

    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {
        const nameCell = row.cells[0].textContent.toLowerCase();
        const branchCell = row.cells[1].textContent.toLowerCase();

        
        if (nameCell.includes(searchText) || branchCell.includes(searchText)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    
    if (visibleCount === 0 && searchText !== "") {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
});
