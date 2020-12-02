describe("Check Google Maps in suggestions", function() {
    
    describe("Google maps", function(){
        it("Should return an error if maps Div does not exist", function(){
            expect($('#suggestions-map')).toExist();
        });
        it("Should return an error if maps Div is not create on clicking on La Habana card map link", function(){
            spyOnEvent($('#cuba'),'click'); 
            $('#cuba').click()
            expect('click').toHaveBeenTriggeredOn($('#cuba'))
        });
        it("Should return an error if maps Div is not create on clicking on Cancun card map link", function(){
            spyOnEvent($('#cancun'),'click'); 
            $('#cancun').click()
            expect('click').toHaveBeenTriggeredOn($('#cancun'))
        });
        it("Should return an error if maps Div is not create on clicking on Buenos Aires card map link", function(){
            spyOnEvent($('#buenos_aires'),'click'); 
            $('#buenos_aires').click()
            expect('click').toHaveBeenTriggeredOn($('#buenos_aires'))
        });
       it("Should return an error if maps Div is not create on clicking on Paris card map link", function(){
            spyOnEvent($('#paris'),'click'); 
            $('#paris').click()
            expect('click').toHaveBeenTriggeredOn($('#paris'))
        });


    });
    
});


