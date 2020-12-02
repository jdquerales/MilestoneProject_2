/* Bootstrap JavaScript function for disabling form submissions if there are invalid fields */

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              alert("Please complete all fields!");
            }
            form.classList.add("was-validated");
            

          },
          false
        );
      });
    },
    false
  );
})();

/* This function send email through EmailJS service by taking inputs from form in contact.html */

function sendMail(contactForm) {

console.log(contactForm.message.value.length);

// Here the email will be sent only if the body of the message is not empty:

if(contactForm.message.value.length!=0){
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

