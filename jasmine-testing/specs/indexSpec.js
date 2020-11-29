describe("Check that paragraphs that are used in index.js exist in document", function() {
    
    describe("Empty paragraphs", function(){
        it("Should return an error if the paragraphs elements is not empty", function(){
            expect($('#p1')).toBeEmpty();
        });
        it("Should return an error if the paragraphs elements is not empty", function(){
            expect($('#p2')).toBeEmpty();
        });
        it("Should return an error if the paragraphs elements is not empty", function(){
            expect($('#p3')).toExist();
        });
        it("Should return an error if the content of the paragraph is not as desired", function(){
            expect($('#p3')).toHaveText('Today is:');
        });
    });

    
});
