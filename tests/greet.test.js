describe('The greet function', function(){

    it('should greet Jane correctly', function(){
        assert.equal('Hello, Jane', greet('Jane'));
    });
    
    it('should greet Pholisa correctly', function(){
        assert.equal('Hello, Pholisa', greet('Pholisa'));
    });

});