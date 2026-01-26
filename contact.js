window.onload = function() {
    // Initialize EmailJS with your public key from config.js
    emailjs.init(EMAILJS_PUBLIC_KEY); 

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const message = document.getElementById("messageInput").value;

        const templateParams = {
            name: name,
            email: email,
            subject: "New Contact Form Message",
            message: message
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("formMessage").innerText = "Message sent successfully!";
                document.getElementById("contactForm").reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById("formMessage").innerText = "Failed to send message. Please try again.";
            });
    });
};
