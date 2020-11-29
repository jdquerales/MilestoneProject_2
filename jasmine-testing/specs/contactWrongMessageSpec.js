describe("Invalid Contact Form", function() {

    beforeEach(function() {
          form = new ContactForm;
    });
    
    describe("Valid message", function(){
        it("Should return an error if the message is empty", function(){
            spyOn(window, "alert");
            sendMail(form);
            expect(window.alert).toHaveBeenCalledWith("Your message is not valid!");
        });
    });

    
});

