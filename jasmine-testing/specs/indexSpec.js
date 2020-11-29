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

    describe("Check addZero function", function(){
        it("Should return add a zero as strings is the input is less than 10", function(){
            expect(addZero(9)).toBe("09");
         });
    });

    var todayDyn = new Date();
    var h = todayDyn.getHours();
    var m = todayDyn.getMinutes();
    var s = todayDyn.getSeconds();

    describe("Check updateTime function", function(){
        it("Should return the current time in the format DD:MM:SS", function(){
            expect(updateTime(todayDyn)).toBe(h + ":" + m + ":" + s);
         });
    });

});
