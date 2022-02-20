const form = document.querySelector('.contactform');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    // Reg expression checkers

    const nameCheck = /^[A-Za-z ]{2,20}$/;
    const phoneCheck = /^[0-9-]{10,19}$/;
    const emailCheck = /^[a-z]{3,}@[a-z]{1,}[.]{1}[a-z]{2,6}$/;

    if(!nameCheck.test(name)){
        alert("Enter a valid name!");
        form.name.style.borderColor = "red";
        return false;
    }
    else{
        form.name.style.borderColor = "green";
    }

    if(!phoneCheck.test(phone)){
        alert("Enter a valid phone number!");
        form.phone.style.borderColor = "red";
        return false;
    }
    else{
        form.phone.style.borderColor = "green";
    }

    if(!emailCheck.test(email)){
        alert("Enter a valid email!");
        form.email.style.borderColor = "red";
        return false;
    }
    else{
        form.email.style.borderColor = "green";
    }

    form.submit();
});