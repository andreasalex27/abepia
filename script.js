function handleGetFormData() {
    const formData = {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked
    };
    return formData;
}

function isNumber(inputString) {
    return !isNaN(inputString);
}

function checkboxIsChecked() {
    const statusCheckbox = document.getElementById('status');
    return statusCheckbox.checked;
}

function validateFormData(formData) {
    if (!formData) {
        return false;
    }
    if (isNaN(formData.zipCode)) {
        return false;
    }
    if (!document.getElementById('status').checked) {
        return false;
    }
    return true;
}

function submit(event) {
    const dataValidasi = validateFormData(handleGetFormData());
    const warningElement = document.getElementById('warning');

    if (dataValidasi === false) {
        warningElement.innerHTML = '<span>Periksa form anda sekali lagi</span>';
        event.preventDefault(); // Prevent form submission if data is invalid
    } else {
        warningElement.innerHTML = ''; // Clear the warning message if data is valid
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", submit);
});
