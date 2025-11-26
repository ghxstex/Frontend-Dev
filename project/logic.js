let arrStudents = JSON.parse(localStorage.getItem("stuData")) || [];
let arrSections = JSON.parse(localStorage.getItem("secData")) || [];
let arrResults = JSON.parse(localStorage.getItem("resData")) || [];

let modStudent = null, modSection = null, modResult = null;

function updateLS() {
    localStorage.setItem("stuData", JSON.stringify(arrStudents));
    localStorage.setItem("secData", JSON.stringify(arrSections));
    localStorage.setItem("resData", JSON.stringify(arrResults));
}

/* STUDENTS */
function printStudents() {
    let view = document.getElementById("tbl_students");
    view.innerHTML = "";
    if (arrStudents.length === 0)
        return view.innerHTML = `<tr><td colspan="5" class="text-center">No students found.</td></tr>`;
    arrStudents.forEach((x, i) => {
        view.innerHTML += `
        <tr>
            <td>${x.nm}</td><td>${x.mail}</td><td>${x.cls}</td><td>${x.dt}</td>
            <td>
                <button class="btn btn-sm btn-dark me-1" onclick="editStudent(${i})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="removeStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });
}

function storeStudent() {
    let obj = {
        nm: inpSName.value,
        mail: inpSEmail.value,
        cls: inpSClass.value,
        dt: inpSJoin.value
    };
    if (modStudent !== null) arrStudents[modStudent] = obj;
    else arrStudents.push(obj);
    modStudent = null;
    updateLS();
    location.reload();
}

function editStudent(i) {
    modStudent = i;
    let s = arrStudents[i];
    inpSName.value = s.nm;
    inpSEmail.value = s.mail;
    inpSClass.value = s.cls;
    inpSJoin.value = s.dt;
    new bootstrap.Modal("#studentBox").show();
}

function removeStudent(i) {
    arrStudents.splice(i, 1);
    updateLS();
    location.reload();
}

/* SECTIONS */
function printSections() {
    let view = document.getElementById("tbl_sections");
    view.innerHTML = "";
    arrSections.forEach((s, i) => {
        let count = arrStudents.filter(z => z.cls === s.label).length;
        view.innerHTML += `
        <tr>
            <td>${s.label}</td><td>${s.info}</td><td>${count}</td>
            <td>
                <button class="btn btn-sm btn-dark me-1" onclick="editSection(${i})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="removeSection(${i})">Delete</button>
            </td>
        </tr>`;
    });
}

function storeSection() {
    let obj = { label: inpCName.value, info: inpCDesc.value };
    if (modSection !== null) arrSections[modSection] = obj;
    else arrSections.push(obj);
    modSection = null;
    updateLS();
    location.reload();
}

function editSection(i) {
    modSection = i;
    let s = arrSections[i];
    inpCName.value = s.label;
    inpCDesc.value = s.info;
    new bootstrap.Modal("#sectionBox").show();
}

function removeSection(i) {
    arrSections.splice(i, 1);
    updateLS();
    location.reload();
}

/* RESULTS */
function grade(m) {
    return m >= 90 ? "A+" :
           m >= 75 ? "A" :
           m >= 60 ? "B" :
           m >= 45 ? "C" :
           m >= 35 ? "D" : "F";
}

function printResults(list = arrResults) {
    let view = document.getElementById("tbl_results");
    view.innerHTML = "";
    if (list.length === 0)
        return view.innerHTML = `<tr><td colspan="6" class="text-center">No results found</td></tr>`;
    list.forEach((x, i) => {
        view.innerHTML += `
        <tr>
            <td>${x.stu}</td><td>${x.sub}</td><td>${x.m}</td>
            <td><span class="badge bg-dark">${grade(x.m)}</span></td><td>${x.d}</td>
            <td>
                <button class="btn btn-sm btn-dark me-1" onclick="editResult(${i})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="removeResult(${i})">Delete</button>
            </td>
        </tr>`;
    });
}

function storeResult() {
    let obj = {
        stu: inpRStudent.value,
        sub: inpRSubject.value,
        m: Number(inpRMarks.value),
        d: inpRDate.value
    };
    if (modResult !== null) arrResults[modResult] = obj;
    else arrResults.push(obj);
    modResult = null;
    updateLS();
    location.reload();
}

function editResult(i) {
    modResult = i;
    let r = arrResults[i];
    inpRStudent.value = r.stu;
    inpRSubject.value = r.sub;
    inpRMarks.value = r.m;
    inpRDate.value = r.d;
    new bootstrap.Modal("#resultBox").show();
}

function removeResult(i) {
    arrResults.splice(i, 1);
    updateLS();
    printResults();
}

/* DROPDOWNS + FILTERS */
function loadOptions() {
    inpSClass.innerHTML = "";
    inpRStudent.innerHTML = "";
    arrSections.forEach(s => inpSClass.innerHTML += `<option>${s.label}</option>`);
    arrStudents.forEach(s => inpRStudent.innerHTML += `<option>${s.nm}</option>`);

    optStudent.innerHTML = `<option value="all">All Students</option>`;
    arrStudents.forEach(s => optStudent.innerHTML += `<option value="${s.nm}">${s.nm}</option>`);

    optSubject.innerHTML = `<option value="all">All Subjects</option>`;
    [...new Set(arrResults.map(r => r.sub))].forEach(sub => optSubject.innerHTML += `<option value="${sub}">${sub}</option>`);
}

optStudent.onchange = optSubject.onchange = () => {
    let fs = optStudent.value, sub = optSubject.value;
    let filtered = arrResults.filter(r =>
        (fs === "all" || r.stu === fs) &&
        (sub === "all" || r.sub === sub)
    );
    printResults(filtered);
};

/* INITIAL */
printStudents();
printSections();
printResults();
loadOptions();
