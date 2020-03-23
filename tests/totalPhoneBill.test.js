describe('The totalPhoneBill function',function(){
    it('should take a projected string of your phone bill usage and return the total phone bill in this case R15.70',function(){
      assert.equal(totalPhoneBill('call, sms, call, call, call, call, sms, sms'),'R15.70');
    });
    
    it('should take a projected string of your phone bill usage and return the total phone bill in this case R9.40',function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms, sms, sms, sms'),'R9.40');
    });
  });