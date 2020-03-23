function totalPhoneBill(bill){
    var total = 0;
    var phonebill = bill.split(", ")
    
    for(var i=0; i<phonebill.length; i++){
      var billItem = phonebill[i].trim();
      
      if(billItem == "call"){
        total += 2.75;
      }
      else if(billItem == "sms"){
        total += 0.65;
      }
    }
      return "R" + total.toFixed(2);
    
}