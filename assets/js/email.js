function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_kete7fz","template_xh7vtcn",parms).then(alert("Your Email has been sent"));
}