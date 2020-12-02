describe("Check events Google Places Maps in destination page", function() {
    
    describe("Google maps", function(){
        it("Should return an error if results ul element does not exist", function(){
            expect($('#places')).toExist();
        });
        it("Should return an error if results ul element is not empty before search", function(){
            expect($('#right-panel ul')).toBeEmpty()
        });
        it("Should return an error if reset button does not trigger a function", function(){
            spyOnEvent($('#reset'),'click'); 
            $('#reset').click()
            expect('click').toHaveBeenTriggeredOn($('#reset'))
        });
        it("Should return an error if results button does not trigger a function", function(){
            spyOnEvent($('#show-results'),'click'); 
            $('#show-results').click()
            expect('click').toHaveBeenTriggeredOn($('#show-results'))
        });
    });
    
});