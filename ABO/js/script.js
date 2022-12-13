const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let answer = gatherFormData();
    alert(answer);
})

function gatherFormData() {
    let formData = new FormData(form);
    let name = formData.get("form-name");
    let like = likeOrDislike(formData.get("form-radio"));
    let comment = formData.get("form-textarea");
    return (
        name
        + " "
        + like
        + " votre vidéo, et voici son commentaire : \""
        + comment
        + "\"."
    )
}

function likeOrDislike(radioValue) {
    return (radioValue == "yes") ? "a aimé" : "n'a pas aimé";
}
