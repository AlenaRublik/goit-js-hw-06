const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = {};
    let formInputIsEmpty = false;
    formData.forEach((value, name) => {
        if (value === "") {
            formInputIsEmpty = true;
        }
        data[name] = value;
    });
    if (formInputIsEmpty) {
        alert("Fill all fields");
        return;
    }
    console.log(data);
    form.reset();
};
