describe("Valid Contact Form", function() {

    beforeEach(function() {
          form = new ContactForm;
    });
    
    describe("Invalid message", function(){
        it("Should return a validation message if the message is not empty", function(){
            spyOn(window, "alert");
            sendMail(form);
            expect(window.alert).toHaveBeenCalledWith("Your message has been sent!");
        });
    });

    
});