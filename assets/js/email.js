function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    if(parms.name || parms.email || parms.message){
        emailjs.send("service_kete7fz","template_xh7vtcn",parms).then(alert("Your Email has been sent"));
    }else{
        alert("Please fill out all fields");
    }

}