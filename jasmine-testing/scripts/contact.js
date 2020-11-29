ContactForm = function() {
    this.validationCustom01 = "";
    this.validationCustom02 = "";
    this.validationCustom03 = "";
    this.message = "";
}

/* This function send email through EmailJS service by taking inputs from form in contact.html */

function sendMail(contactForm) {

console.log(contactForm.message.length);

// Here the email will be sent only if the body of the message is not empty:
if(contactForm.message.length==0){
    alert("Your message is not valid!")
} else{
  emailjs.send("gmail.com", "template_bq0n2sx", {
      from_name: contactForm.validationCustom01.value,
      from_surname: contactForm.validationCustom02.value,
      from_email: contactForm.validationCustom03.value,
      project_request: contactForm.message.value,
    }).then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      },
    );
     alert("Your message has been sent!")
};

  return false; // To block from loading a new page
}

