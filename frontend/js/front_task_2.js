function validate(form) {
    fail = validateName(form.name.value)
    fail += validateEmail(form.email.value)
    fail += validateNumber(form.number.value)
    if (fail == "") return true
    else { errorText.innerHTML=fail; return false }
}

//Проверка ввода имени
function validateName(field)
{
    return (field == "") ? "Не введено имя. " : ""
}

//Проверка ввода почты 
function validateEmail(field) {
    if (field == "") return "Не введен адрес электронной почты. "
    else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+)$/.test(field)))
    return "Электронный адрес имеет неверный формат. "
    return ""
}

//Проверка ввода номера телефона
    function validateNumber(field) {
    if (field == "") return "Не введен номер телефона. "
    else if (!(/^((\+7|7|8)+([0-9]){10})$/.test(field)))
    return "Номер телефона имеет неверный формат. "
    return ""
}