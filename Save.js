function save() {


    let surname;
    if (document.getElementById("surname").value.trim()) {
        alert("surname empty")
        return false;
    }

    let name;
    if (!document.getElementById("name").value.trim()) {
        alert("name is empty");
        return false;
    }

    let id;
    if (!document.getElementById("id").value.trim()) {
        alert("id is empty");
        return false;
    }

    let email;
    if (!document.getElementById("mail").value.trim()) {
        alert("mail is empty");
        return false;
    }

    let note;
    if (!document.getElementById("note").value.trim()) {
        alert("note is empty");
        return false;
    }

    let saveObj = {
        surname,
        name,
        id,
        email,
        note,
    };
    if (document.getElementById("save").checked) {
        localStorage.setItem("save", JSON.stringify(saveObj));
    }

    return true;
}