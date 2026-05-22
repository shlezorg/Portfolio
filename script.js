let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

emailjs.init("nE3wh-uaJoubwfXEV");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_9wh7a3p",
        "template_fbaep8l",
        this
    )

    .then(() => {
        alert("Message Sent Successfully!");
        this.reset();
    })

    .catch((error) => {
        console.log(error);
        alert("Sending Failed!");
    });

});