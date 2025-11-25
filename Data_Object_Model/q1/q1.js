

const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
let currentEditingInput = null; 

addProductBtn.addEventListener("click", function () {
    const productName = productInput.value.trim();
    if (!productName) return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = productName;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    productList.appendChild(li);
    productInput.value = "";
});


productList.addEventListener("click", function (event) {
    const target = event.target;
    const listItem = target.closest("li");
    if (!listItem) return;

    
    if (target.classList.contains("delete-btn")) {
        productList.removeChild(listItem);
    }

    
    if (target.classList.contains("edit-btn")) {
        startEdit(listItem);
    }
});

function startEdit(listItem) {
    const span = listItem.querySelector("span");

    
    if (currentEditingInput) return;

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    listItem.insertBefore(input, span);
    listItem.removeChild(span);
    input.focus();
    currentEditingInput = input;

    
    input.addEventListener("blur", function () {
        finishEdit(listItem, input);
    });

    
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            input.blur();
        }
    });
}

function finishEdit(listItem, input) {
    const newText = input.value.trim();
    const span = document.createElement("span");
    span.textContent = newText || "Unnamed product";

    listItem.insertBefore(span, input);
    listItem.removeChild(input);
    currentEditingInput = null;
}
