// Tambahkan kode JavaScript kalian di file ini
// Tambahkan kode JavaScript kalian di file ini
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

document.getElementById('submit-form').addEventListener('click', function (event) {
    event.preventDefault(); // Hindari pengiriman formulir standar
    const formData = handleGetFormData();
    console.log(formData); // Lakukan sesuatu dengan formData (misalnya, kirim ke server)
});

function isNumber(inputString) {
    return !isNaN(inputString);
}

function checkboxIsChecked() {
    const statusCheckbox = document.getElementById('status');
    return statusCheckbox.checked;
}

function validateFormData(formData) {
    if (!formData) {
        return false
    }
    if (isNaN(formData.zipCode)) {
        return false
    }
    if (!document.getElementById('status').checked) {
        return false
    } return true
}

let validasiData = document.getElementById('submit-form')
validasiData.addEventListener('submit', ()=> {submit()})

function submit(event) {
    let dataValidasi = validateFormData(handleGetFormData())
    if (dataValidasi === false) {
        return document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi'
    }
    else {
        return document.getElementById('warning').innerHTML = ''
    }
    event.preventDefault()
}